//* based on jsPsych v6.x 
/* Navon Task (Global Condition) - Shapes WITH FEEDBACK*/
var timeline = [];
var repo_site = 'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/'
/* preload media */
var preload = {
    type: 'preload',
    show_progress_bar: true,
    message: 'Loading images... Please wait',
    auto_preload: true,
    images: test_stimuli
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

var global_instructions_block = {
    type: 'html-keyboard-response',
    stimulus: '<p>For the following trials, please select <i>only</i> the <strong>large</strong> shape</p><br><br><p>Press any key to continue</p>',
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

var global_array = {
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
        if (data.global_shape == 'black_circle' && data.response == 'o') {
            correct = true;
        } else if (data.global_shape == 'black_X' && data.response == 'x') {
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

///////////////// Global block /////////////////////
var global_set = {
    timeline: [fixation, global_array, feedback],
    timeline_variables: test_stimuli,
    randomize_order: true
}

var global_block = {
    timeline: [preload, global_instructions_block, global_set],
    data: {
        test_part: 'test',
        test_type: 'global'
    },
    repetitions: 10
}

/* set conditional timelines */
timeline.push(welcome_block);
timeline.push(preload);
timeline.push(global_block);
timeline.push(end_block);

/* define results */

var total_trials = jsPsych.data.get().filter({
    test_part: 'test'
});
var correct_trials = total_trials.filter({
    correct: true
});
var wrong_trials = jsPsych.data.get().filter({
    correct: false
}).count();
var rt = correct_trials.select('rt').mean();
var global_congruent_rt = Math.round(jsPsych.data.get().filter({
    correct: true,
    stim_type: 'congruent',
    test_type: 'global'
}).select('rt').mean());
var global_incongruent_rt = Math.round(jsPsych.data.get().filter({
    correct: true,
    stim_type: 'incongruent',
    test_type: 'global'
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