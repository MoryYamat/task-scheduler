# Design and implementation notes

## pseudocode

### class Project
* __properties__
    * projectId
    * projectName
    * projectType
    * projectPeriod
    * Progression rate

* __methods__
    * getProperties
    * setProperties

### class Task depends on　the Project
* __properties__
    * taskId
    * taskName
    * taskAttribute
    * taskPeriod
    * Progression rate　

* __methods__
    * getProperties
    * setProperties
    * changeProgressionRate

class Schedule
* __properties__
    * year
    * date
    * time
    * In-progress tasks

* __methods__
    * changeTime
    * 

## Functional analysis based on stepwise operations

__Basic operations that users will perform when using this app__

1. Select Project ID
    1. Show the identifiers of projects you have already created
    2. 
2. Select Task Attribute from Project process
3. Select date and time