function getCurrentDayAndTime() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date(); 

    const dayOfWeek = daysOfWeek[now.getDay()];

    let hours = now.getHours(); 
    let minutes = now.getMinutes(); 
    let seconds = now.getSeconds();

    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    const currentTime = hours + ' ' + ampm + ' : ' + minutes + ' : ' + seconds;
    
    document.write('Today is' + dayOfWeek + '.');
    document.write('Current time is: ' + currentTime);
}

getCurrentDayAndTime();