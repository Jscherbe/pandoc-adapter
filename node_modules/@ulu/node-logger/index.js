const Chalk = require('chalk');
const chalk = new Chalk.Instance({ level: 1 });
const defaults = {
  enabled:       true,        // <boolean|function>      Whether to output logs
  title:         "",          // <string>       The title to prefix the logs with 
  subtitle:      false,       // <string>       Secondary title prefix
  devTitle:      "dev",       // <string>     Text to use when using the "developer" log output (for developers to see)
  devEnabled:    true,        // <boolean|function>      Whether to output .dev()  logs
  colorTitle:    "green",
  colorSubtitle: "green",
  colorError:    "red",
  colorWarning:  "yellow",
  colorDev:      "magenata"
};
/**
 * @typedef {Object} logger-instance
 */
/**
 *   Returns a logger instance based on the configuration
 *   @param  {object} config The options for the logger instance
 *   @return {logger-instance} Object with methods to use to log output
 */
module.exports = function(config) {

  const options = Object.assign({}, defaults, config);

  let prefix = options.title ? chalk.bold[options.colorTitle](`${ options.title } `) : "";

  if (options.subtitle) {
    prefix += chalk[options.colorSubtitle](`(${ options.subtitle })`);
  }

  // prefix = chalk[options.colorSubtitle](prefix);

  function isEnabled(dev) {
    const key = dev ? "devEnabled" : "enabled";
    if (typeof options[key] === "function") {
      return options[key]();
    } else {
      return options[key];
    }
  }

  return {
    /**
     * Changes to merge into options (ie. enable = false)
     * @param {Object} changes 
     */
    setOptions(changes) {
      Object.assign(options, changes, options);
    },
    /**
     * Standard console.log 
     * @param  {*} msgs Messages to output in console
     */
    log(...msgs) {
      if (!isEnabled()) return; 
      msgs.unshift(prefix);
      console.log.apply(console, msgs);
    },
    /**
     * Always output messages (regardless of options.enabled)
     * @param  {*} msgs Messages to output in console
     */
    required(...msgs) {
      msgs.unshift(prefix);
      console.log.apply(console, msgs);
    },
    /**
     * Always output styled error message 
     * @param  {*} msgs Messages to output in console
     */
    error(...msgs) {
      msgs.unshift(chalk[options.colorError]('(Error) '));
      this.required.apply(this, msgs);
    },
    /**
     * Output warning styles logs
     * @param  {*} msgs Messages to output in console
     */    
    warn(...msgs) {
      if (!isEnabled()) return;
      msgs.unshift(chalk[options.colorWarning]('(Warning) '));
      this.log.apply(this, msgs);
    },
    /**
     * Output log in list (unordered/bullet) form
     * @param {String} title Title for the list
     * @param {Array} array Array of items to log
     */   
    list(title, array) {
      if (!isEnabled()) return;
      if (!title) {
        console.log(" - " +  array.join("\n - "));
      } else {
        this.log.call(this, title, "\n - " +  array.join("\n - "));
      }
    },
    /**
     * Output log in an ordered list form
     * @param {String} title Title for the list
     * @param {Array} array Array of items to log
     */   
    listOrdered(title, array) {
      if (!isEnabled()) return;
      var list = array.reduce((acc, current, index) => {
        var item = "  " + (index + 1) + ". " + current.toString();
        return acc + item + (index !== array.length - 1 ? "\n" : "");
      }, "");
      if (!title) {
        console.log(list);
      } else {
        this.log.call(this, title, "\n" + list);
      }
    },
    /**
     * Output a log for the developer
     * - Uses the 'options.devEnabled' flag for output condition
     * - Styled differently (adds options.devTitle) to prefix
     * @param  {*} msgs Messages to output in console
     */
    devLog(...msgs) {
      if (!isEnabled(true)) return; 
      msgs.unshift(chalk.magenta(`(${ options.devTitle })`));
      msgs.unshift(prefix);
      console.log.apply(console, msgs);
    },
    /**
     * Display a dev log of the passed processes memory usage, plus any additional messages 
     * @param {Object} scriptProcess The process to use for memory log (ie. process variable in your script)
     * @param  {*} msgs Other messages to include
     */
    memory(scriptProcess, ...msgs) {
      if (!isEnabled()) return; 

      const used = scriptProcess.memoryUsage(),
            details = [];

      for (let key in used) {
        details.push(`\n - ${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
      }
      this.devLog.apply(this, msgs.concat(details));
    },
    /**
     * Start a log timer
     * - call logger.timeEnd() to output the time span
     * @param {String} label A custom label to use if you are running multiple time checks, defualts to prefix from options
     */
    time(label = prefix) {
      if (!isEnabled()) return;
      console.time(label);
    },
    /**
     * Start a log timer
     * - call logger.timeEnd() to output the time span
     * @param {String} label A custom label to use if you are running multiple time checks, defualts to prefix from options
     * @param {*} msgs Other messages to include in the output
     */    
    timeEnd(label = prefix, ...msgs) {
      if (!isEnabled()) return;
      msgs.unshift(chalk.yellow('(Time Stamp)'));
      this.log.apply(this, msgs);
      console.timeEnd(label);
    }
  };
};