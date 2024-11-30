# Minimum Viable Product
This is like __Task__-Oriented Scheduling.

## Project Management Function
### __Gantt chart imitation__
* Horizontal axis is time
* The vertical axis is the process
* The type of process is the same as the task attribute (core objective)


### Project Process
* <span style="color: #0066FF">plan</span>
* <span style="color: #FFFF00">design</span>  
* <span style="color: #FF0000">implementation</span>
* <span style="color: #00FF00">test</span>
* <span style="color: #CC00FF">review</span>
* deployment


## ↕ Task Design ↕
### Task variables
* From when to when
* Where to do it
* What to do
* What for (task attribute)

### Task Attributes
* Which project process the task belongs to
* Daily Living Tasks
* Other

## Schedule Management Function
__Arrange tasks on a timeline__


## Page transition

```mermaid
graph TD;
    Start[dashboard] --> Project[project Management]
    Start[dashboard] --> Schedule[schedule Management]
    Project --> ProjectEditor[project Editor]
    Schedule --> ScheduleEditor[schedule Editor]

```

## __component structure (for client)__


```mermaid
graph TD
    App[App] --> Routes[Routes]
    Routes --> Layout[Dashboard Layout]
    Layout --> Dashboard[dashboard page]
    Layout --> project[project page]
    Layout --> shcedule[schedule page]

```
