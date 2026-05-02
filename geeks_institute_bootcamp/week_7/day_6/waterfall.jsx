function RobotArmStatus() {
    const temperature = 45;
    const currentTask = "Moving to cup";
  
    return (
      <>
        <TemperatureDisplay temperature={temperature} />
        <TaskDisplay task={currentTask} />
      </>
    );
  }