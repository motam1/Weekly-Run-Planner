function addRestDay(day){
    var selectedDiv = document.getElementById(day);
    var buttons = selectedDiv.getElementsByTagName('button');
    var restText = document.createElement('p');
    var cancelButton = document.createElement('button');

    buttons[0].style.display='none';
    buttons[1].style.display='none';
    buttons[2].style.display='none';
    
    cancelButton.className = 'cancelButton';
    cancelButton.textContent = 'Cancel';
    restText.textContent = 'Rest Day';
    
    cancelButton.onclick = function() {
        buttons[0].style.display = '';
        buttons[1].style.display = '';
        buttons[2].style.display = '';

        selectedDiv.removeChild(restText);
        selectedDiv.removeChild(cancelButton);
    };

    selectedDiv.appendChild(restText);
    selectedDiv.appendChild(cancelButton);
}

function addRun(day){
    var selectedDiv = document.getElementById(day);
    var buttons = selectedDiv.getElementsByTagName('button');
    var distanceInput = document.createElement('input');
    var paceInput = document.createElement('input');
    var runText1, runText2;
    var distanceText = document.createElement('p');
    var paceText = document.createElement('p');
    var cancelButton = document.createElement('button');
    var enterButton = document.createElement('button');
    var paceInfo, distanceInfo;
    var state = 1;

    buttons[0].style.display='none';
    buttons[1].style.display='none';
    buttons[2].style.display='none';

    cancelButton.className = 'cancelButton';
    cancelButton.textContent = 'Cancel';

    enterButton.className = 'enterButton';
    enterButton.textContent = 'Enter';

    distanceInput.className = 'distanceInput';
    distanceInput.maxLength = '4';
    distanceInput.placeholder = '10';

    paceInput.className = 'paceInput';
    paceInput.maxLength = '5';
    paceInput.placeholder = '4:30';

    distanceText.textContent = 'Enter Distance (km):';
    
    paceText.textContent = 'Enter Pace (min/km):';

    cancelButton.onclick = function() {
        buttons[0].style.display = '';
        buttons[1].style.display = '';
        buttons[2].style.display = '';
        if (state){
            selectedDiv.removeChild(distanceText);
            selectedDiv.removeChild(distanceInput);
            selectedDiv.removeChild(paceText);
            selectedDiv.removeChild(paceInput);
            selectedDiv.removeChild(enterButton);
        }
        else{
            selectedDiv.removeChild(runText1);
            selectedDiv.removeChild(runText2);
            selectedDiv.removeChild(paceInfo);
            selectedDiv.removeChild(distanceInfo);
        }
        selectedDiv.removeChild(cancelButton);  
    }

    enterButton.onclick = function(){
        if(paceInput.value != '' && distanceInput.value != ''){
            state = 0;
            paceInfo = document.createElement('p');
            runText1 = document.createElement('p');
            runText2 = document.createElement('p');
            distanceInfo = document.createElement('p');

            runText1.textContent = 'km run @';
            runText2.textContent = 'min/km pace';
            paceInfo.textContent = paceInput.value;
            distanceInfo.textContent = distanceInput.value;

            selectedDiv.appendChild(distanceInfo);
            selectedDiv.appendChild(runText1);
            selectedDiv.appendChild(paceInfo);
            selectedDiv.appendChild(runText2);
            selectedDiv.removeChild(enterButton);
            selectedDiv.removeChild(distanceText);
            selectedDiv.removeChild(paceText);
            selectedDiv.removeChild(distanceInput);
            selectedDiv.removeChild(paceInput);
        }
    }
    selectedDiv.appendChild(distanceText);
    selectedDiv.appendChild(distanceInput);
    selectedDiv.appendChild(paceText);
    selectedDiv.appendChild(paceInput);
    selectedDiv.appendChild(cancelButton);
    selectedDiv.appendChild(enterButton);
}

function addWorkout(day){
    var selectedDiv = document.getElementById(day);
    var buttons = selectedDiv.getElementsByTagName('button');
    var workoutInput = document.createElement('input');
    var cancelButton = document.createElement('button');
    var enterButton = document.createElement('button');
    var workoutInfo;
    var state = 1;

    buttons[0].style.display='none';
    buttons[1].style.display='none';
    buttons[2].style.display='none';

    enterButton.className = 'enterButton';
    enterButton.textContent = 'Enter';

    cancelButton.className = 'cancelButton';
    cancelButton.textContent = 'Cancel';

    workoutInput.className = 'workoutInput';
    workoutInput.placeholder = 'Enter Workout Info';
    workoutInput.maxLength = '50';

    cancelButton.onclick = function() {
        buttons[0].style.display = '';
        buttons[1].style.display = '';
        buttons[2].style.display = '';
        if(state){
            selectedDiv.removeChild(workoutInput);
            selectedDiv.removeChild(enterButton);
        } 
        selectedDiv.removeChild(cancelButton);
        if (workoutInfo){
            selectedDiv.removeChild(workoutInfo);
            workoutInfo = null;
        }  
    };
    
    enterButton.onclick = function(){
        if (workoutInput.value != ''){
            state = 0;
            workoutInfo = document.createElement('p');
            workoutInfo.textContent = workoutInput.value;
            selectedDiv.appendChild(workoutInfo);
            selectedDiv.removeChild(workoutInput);
            selectedDiv.removeChild(enterButton);
        }
    }
    selectedDiv.appendChild(workoutInput);   
    selectedDiv.appendChild(cancelButton);
    selectedDiv.appendChild(enterButton)
}

