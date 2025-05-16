# Change Log

## 0.0.19

- Add node > fs > readFileSyncFromUrl()
  - Utility for getting files in node ES modules 
- Add node > path > getUrlDirname() and resolveFromUrlDir() 
  - To help with getting the common __dirname in ES node modules

## 0.0.18

- Change package.json 'exports' to explicit paths and remove wildcard, remove extensionless exports. **Important**, all imports should use js extension like:
  - `import { hasRequiredProps } from "@ulu/utils/object.js";`

## 0.0.17

- Fix mistake in extractMatchDetails

## 0.0.16

- (Added) String > extractMatchDetails() Provides details about regex match for string for replacement/usage

## 0.0.14

- (Added) Array > filterInPlace() Will not copy array, mutates the array passed (instead of copy [ie. Array.filter()])

## 0.0.13

- (Added) Browser > dom > isBrowser() Test whether script is executing in browser environment

## 0.0.12

- (Added) Array > getFirstLast() Test whether an index in an array is first or last

## 0.0.11

- (Added) Array > joinForSentence (Used for joining array of strings/numbers for a sentence)
  - Example [1,2,3] "1, 2 and 3"

## 0.0.10

- (Added) String > separateCssUnit (change returned value to number [versus string])
  
## 0.0.9

- (Added) Add String (toInitials) Creates initials from string

## 0.0.8

- (Added)  number (sum and average) 
- (Added)  array (removeDuplicates, createEmptyMatrix)
- (Added)  string (titleCase)

## 0.0.7

Fix missing jsdoc comments in string module. Add linting and fix issues.