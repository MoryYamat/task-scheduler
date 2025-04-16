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
* period
* Where to do it
* What to do
* What for (task attribute)

### Task Attributes
* Which project process the task belongs to
* Daily Living Tasks
* Other

## Schedule Management Function
__Arrange tasks on a timeline__


## Project Process

```mermaid
graph TD
    Project[Project] --> PProcess[ProjectProcess]
    PProcess --> design[Design]
    design --> implement[Implementation]
    implement --> test[Test]
    test --> review[Review]
    review --> deploy[Deploy]
    deploy --> design

```

## Project Structure
```mermaid
flowchart LR
    subgraph Process
        direction TB
        plan[Plan] --> design[Design]
        design --> implementation[Implementation]
        implementation --> test[Test]
        test --> review[Review]
        review --> deploy[Deploy]
        deploy --> plan[Plan]
    end

    subgraph　Issues aggregation
        plan --> issues@{shape: cyl, label:issues}
        design --> issues
        implementation --> issues
        test --> issues
        review --> issues
        deploy --> issues
    end

    subgraph Creating a task
        issues --> task@{shape: cyl, label:task}
        task --> plan
        task --> design
        task --> implementation
        task --> test
        task --> review
        task --> deploy
    end

```

* Have to think about how to manage the issues.
    * The issues are interrelated or independent
    * Can we use network analysis to visualize the connections between issues?
    * First, let the user create attributes and variables related to the problem and their descriptions. Once the data is collected, let them visualize the relationships.

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

## Data Flow

```mermaid
classDiagram
    Project *-- Task : composition

    class Project {
        +string name
        +int Projectid
        -Date startDate
        -Date endDate
        +string projectProcess[design, implementation, test, review, deploy]
    }

    class Task {
        +projectProcess process
        +int taskId
        +string description
        +float progressiveRate

    }

    class Schedule {
        +date startTime
        +date endTime
        +date nowTime
    }




```


## client server database

```mermaid
flowchart LR

    client[Client] --> server[Server]
    server --> database@{shape: cyl, label: Database}

    server --> client
    database --> server


```

## Entity RelationShip Modeling
* project -> process -> tasks -> schedule
* A project is a collection of processes
* Processes are a collection of tasks
* Tasks are plotted on a schedule

* The problem lies between process and task

```mermaid
erDiagram
    project[Project] {
        string name
        string type
        class process
    }
    process[Process] {
        string name
        class task
    }
    task[Task] {    
        string name
        string type
        float progressRate
        string status
    }   
    schedule[Schedule] {
        date today
        time now
        task dotask
    }

    project ||--|{ process: contains
    task }|--|| process: belongs_to
    task }|--|| schedule: scheduled_for
```


* The project period is not set, but issues that arise in each process are collected and analyzed, and the cost-effectiveness of resolving those issues is considered.
Take advantage of the benefits of agile development. (The sooner the better.)

```mermaid
erDiagram
    project[Project] {
        string ProjectName
        string DevMethod
        arayy task
    }
    task[Task] {
        string TaskName
        string ProcessName
        float ProgressRate
        string Status
    }
    todo[ToDo] {
        string todoName
        list TodoList
        float TaskContributionRate
        time StartTime
        time EndTime
    }
    schedule[Schedule] {

    }

```

## Data Structure
__JOSN__
<br></br>
common style
```
DATA = `
[
    {
        "name": "hogehoge",
        "ID": num
    }
]
`;
```
<br></br>
ProjectData
```
ProjectData = `
[
    {
        "name": "hogehoge",
        "type": "type1",
        "ID": id
    }
]
`;
```
<br></br>
TaskData
```
TaskData = `
[
    {
        "belongProject": "projectName",
        "belongProcess": "processName",
        "taskname": "hogehoge",
        "taskID": id, 
        "progressionRate": num,
        "status": "done" ("ongoing", "pending")
    }
]
`;
```

<br></br>


## sequence diagram
user interaction with application

```mermaid
sequenceDiagram
    box User Group
    Participant User
    end

    box Client Group
    Participant Project
    Participant Task
    Participant Schedule
    Participant Issues
    end

    box Server Group
    Participant AppServer
    Participant Database
    end

    activate User
    User->>Project: Submit(ProjectName,Type)
    Project->>AppServer: POST: (data)
    AppServer-->>Project: Response
    Project-->>User: Success!
    deactivate User
    AppServer->>Database: Registration
    Database-->>AppServer: result

    activate Task
    Task-->>User: Page Display
    activate User
    User->>Task: Submit(ProjectName, TaskName, Process, Do-List)
    Task->>AppServer: POST: (data)
    AppServer-->>Task: Response
    Task-->>User: Success!
    deactivate User
    deactivate Task
    AppServer->>Database: Registration
    Database-->>AppServer: result

    activate User
    User->>Schedule: Add a task to the time schedule
    Schedule->>AppServer: POST (data)
    AppServer->>Database: Registration
    Database-->>AppServer: Result
    deactivate User

    Schedule-->>User: View Schedule

    activate User
    User->>Schedule: Progress registration (ProgressionRate, DoneList, )
    Schedule->>AppServer: POST (data)
    AppServer->>Database: Registration
    Database-->>AppServer: Result
    User->>Issues: Issue registration(belongsTask, issueName, list(todo), process, description)
    Issues->>AppServer: POST (data)
    AppServer->>Database: Registration
    Database-->>AppServer: Result
    deactivate User

    Issues-->>User: View Issues
    activate User
    User->>Task: Analyze the issue and register it as a task
    Task->>AppServer: POST (data)
    AppServer->>Database: Registration
    Database-->>AppServer: Result
    deactivate User

    User->>Issues: status Change 
    Issues->>AppServer: POST (data)
    AppServer->>Database: Registration
    Database-->>AppServer: Result
```