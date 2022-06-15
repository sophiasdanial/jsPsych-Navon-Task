//* based on jsPsych v6.x 
/* Navon Task (Local Condition) - Shapes WITH FEEDBACK*/
var timeline = [];
var repo_site = 'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/'
/* preload media */
var preload = {
    type: 'preload',
    show_progress_bar: true,
    message: 'Loading images... Please wait',
    auto_preload: true,
    images: [
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/fixation_cross.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/XofX_topL.png', 
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/XofX_topR.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/XofX_bottomL.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/XofX_bottomR.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/circleofcircles_topL.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/circleofcircles_topR.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/circleofcircles_bottomL.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/circleofcircles_bottomR.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/circleofX_topL.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/circleofX_topR.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/circleofX_bottomL.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/circleofX_bottomR.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/Xofcircles_topL.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/Xofcircles_topR.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/Xofcircles_bottomL.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/Xofcircles_bottomR.png',
    ],
    on_success: console.log('success')
}


/* define stimuli */

var test_stimuli = [
    {
      stimulus: repo_site + "XofX_topL.png",
      data: { 
        stim_type: 'congruent',
        global_shape: 'black_X',
        local_shape: 'Xs'}
    },
    {
        stimulus: repo_site + "XofX_topR.png",
        data: { 
          stim_type: 'congruent',
          global_shape: 'black_X',
          local_shape: 'Xs'}
    },
    {
        stimulus: repo_site + "XofX_bottomL.png",
        data: { 
          stim_type: 'congruent',
          global_shape: 'black_X',
          local_shape: 'Xs'}
    },
    {
        stimulus: repo_site + "XofX_bottomR.png",
        data: { 
          stim_type: 'congruent',
          global_shape: 'black_X',
          local_shape: 'Xs'}
    },
    {
      stimulus: repo_site + "circleofcircles_topL.png",
      data: {  
        stim_type: 'congruent',
        global_shape: 'black_circle',
        local_shape: 'circles'}
    },
    {
        stimulus: repo_site + "circleofcircles_topR.png",
        data: {  
          stim_type: 'congruent',
          global_shape: 'black_circle',
          local_shape: 'circles'}
    },
    {
        stimulus: repo_site + "circleofcircles_bottomL.png",
        data: {  
          stim_type: 'congruent',
          global_shape: 'black_circle',
          local_shape: 'circles'}
    },
    {
        stimulus: repo_site + "circleofcircles_bottomR.png",
        data: {  
          stim_type: 'congruent',
          global_shape: 'black_circle',
          local_shape: 'circles'}
    },
    {
      stimulus: repo_site + "circleofX_topL.png",
      data: { 
            stim_type: 'incongruent',
            global_shape: 'black_circle',
            local_shape: 'Xs'}
    },
    {
        stimulus: repo_site + "circleofX_topR.png",
        data: { 
          stim_type: 'incongruent',
          global_shape: 'black_circle',
          local_shape: 'Xs'}
    },
    {
        stimulus: repo_site + "circleofX_bottomL.png",
        data: { 
          stim_type: 'incongruent',
          global_shape: 'black_circle',
          local_shape: 'Xs'}
    },
    {
        stimulus: repo_site + "circleofX_bottomR.png",
        data: { 
          stim_type: 'incongruent',
          global_shape: 'black_circle',
          local_shape: 'Xs'}
    },
    {
      stimulus: repo_site + "Xofcircles_topL.png",
      data: { 
        stim_type: 'incongruent',
        global_shape: 'black_X',
        local_shape: 'circles'}
    },
    {
        stimulus: repo_site + "Xofcircles_topR.png",
        data: { 
          stim_type: 'incongruent',
          global_shape: 'black_X',
          local_shape: 'circles'}
    },
    {
        stimulus: repo_site + "Xofcircles_bottomL.png",
        data: { 
          stim_type: 'incongruent',
          global_shape: 'black_X',
          local_shape: 'circles'}
    },
    {
        stimulus: repo_site + "Xofcircles_bottomR.png",
        data: { 
          stim_type: 'incongruent',
          global_shape: 'black_X',
          local_shape: 'circles'}
    }
];

/*text blocks*/
var welcome_block = {
    type: 'html-keyboard-response',
    stimulus: 
    '<div style="text-align:center"><p>Welcome to Part One.</p><br>\
    <p>In this experiment, each trial will present a large shape made out of smaller shapes.</p>\
    <p>For example, you may see a large <strong>X</strong> made out of smaller <strong>O</strong>`s. Or you may see a large <strong>O</strong> made out of smaller <strong>X</strong>`s.</p><br><br>\
    <p>You will be asked to identify either the large shape or the smaller shape.</p><br><br>\
    <p>If you select <strong>X</strong>, please press the <strong>X</strong> button on your keyboard.</p>\
    <p>If you select <strong>O</strong>, please press the <strong>O</strong> button on your keyboard.</p><br><br>\
    <p><i>Press any button to continue</i>',
    post_trial_gap: 3000
}

var end_block = {
    type: 'html-keyboard-response',
    stimulus:
    '<div style="text-align:center"><p>Congratulations! You have completed Part One.<br>Press any button to move on to the next part</p>'
}

var local_instructions_block = {
    type: 'html-keyboard-response',
    stimulus: '<p>For the following trials, please select <i>only</i> the <span style="font-size:40px"><strong>small</strong></span> shape</p><br><br><p>Press any key to continue</p>',
    post_trial_gap: 2000
}
/* define trials */

var fixation = {
    type: 'image-keyboard-response',
    stimulus: 'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/fixation_cross.png',
    choices: jsPsych.NO_KEYS,
    trial_duration: 500,
    data: {
        test_part: 'fixation'
    }
}
/*define conditions*/

var local_array = {
    type: 'image-keyboard-response',
    choices: ['x', 'o'],
    stimulus_duration: 50,
    trial_duration: 4000,
    stimulus_height: 700,
    maintain_aspect_ratio: true,
    stimulus: jsPsych.timelineVariable('stimulus'),
    data: jsPsych.timelineVariable('data'),
    on_finish: function (data) {
        var correct = false;
        if (data.local_shape == 'Xs' && data.response == 'x') {
            correct = true;
        } else if (data.local_shape == 'circles' && data.response == 'o') {
            correct = true;
        }
        data.correct = correct;
    }
}

var feedback = {
    type: 'html-keyboard-response',
    trial_duration: 700,
    post_trial_gap: 300,
    choices: jsPsych.NO_KEYS,
    stimulus: function(){
      var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
      if(last_trial_correct){
        return '<p style="font-size:50px;color:green"><strong>Correct!</strong></p>'; 
      } else {
        return '<p style="font-size:50px;color:red"><strong>Incorrect!</strong></p>'; 
      }
    }
}

/* test */

///////////////// Local block /////////////////////
var local_set = {
    timeline: [fixation, local_array, feedback],
    timeline_variables: test_stimuli,
    randomize_order: true
};

var local_block = {
    timeline: [local_instructions_block, local_set],
    repetitions: 10
};

/* set conditional timelines */
timeline.push(preload);
timeline.push(welcome_block); 
timeline.push(local_block);
timeline.push(end_block);

/* define results */

var correct_trials = jsPsych.data.get().filter({
    correct: true
}).count();
var wrong_trials = jsPsych.data.get().filter({
    correct: false
}).count();
var error_congruent = jsPsych.data.get().filter({
    correct: false,
    stim_type: 'congruent'
}).count();
var error_incongruent = jsPsych.data.get().filter({
    correct: false,
    stim_type: 'incongruent'
}).count();
var rt = jsPsych.data.get().filter({
    correct: true
}).select('rt').mean();
var global_congruent_rt = Math.round(jsPsych.data.get().filter({
    correct: true,
    stim_type: 'congruent',
}).select('rt').mean());
var global_incongruent_rt = Math.round(jsPsych.data.get().filter({
    correct: true,
    stim_type: 'incongruent',
}).select('rt').mean());
///////trial-by-trial capture for Qualtrics////////
var XofX = jsPsych.data.get().filter({
    correct: true,
    global_shape: 'black_X',
    local_shape: 'Xs'
}).select('rt').values;
var XofO = jsPsych.data.get().filter({
    correct: true,
    global_shape: 'black_X',
    local_shape: 'circles'
}).select('rt').values;
var OofO = jsPsych.data.get().filter({
    correct: true,
    global_shape: 'black_circle',
    local_shape: 'circles'
}).select('rt').values;
var OofX = jsPsych.data.get().filter({
    correct: true,
    global_shape: 'black_circles',
    local_shape: 'Xs'
}).select('rt').values;