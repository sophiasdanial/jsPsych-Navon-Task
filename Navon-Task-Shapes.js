//* based on jsPsych v6.x 
/* Navon Task - Shapes WITH FEEDBACK*/
var timeline = [];
var repo_site = 'https://sophiasdanial.github.io/gg-testing/images/'
/* preload media */
var preload = {
    type: 'preload',
    stimulus: [
        {shapes: 'https://sophiasdanial.github.io/gg-testing/images/black_XofXs.png'}, 
        {shapes: 'https://sophiasdanial.github.io/gg-testing/images/black_Xofcircles.png'},
        {shapes: 'https://sophiasdanial.github.io/gg-testing/images/black_circleofXs.png'},
        {shapes: 'https://sophiasdanial.github.io/gg-testing/images/black_circleofcircles.png'},
        {cross: 'https://sophiasdanial.github.io/gg-testing/images/fixation_cross.png'}
    ]
}
timeline.push(preload)

/* define stimuli */

var test_stimuli = [
    {
      stimulus: repo_site + "black_XofXs.png",
      data: { 
          stim_type: 'congruent',
          global_shape: 'black_X',
          local_shape: 'Xs'}
    },
    {
      stimulus: repo_site + "black_circleofcircles.png",
      data: {  
          stim_type: 'congruent',
          global_shape: 'black_circle',
          local_shape: 'circles'}
    },
    {
      stimulus: repo_site + "black_Xofcircles.png",
      data: { 
          stim_type: 'incongruent',
          global_shape: 'black_X',
          local_shape: 'circles'}
    },
    {
      stimulus: repo_site + "black_circleofXs.png",
      data: { 
          stim_type: 'incongruent',
          global_shape: 'black_circle',
          local_shape: 'Xs'}
    }
];

/*text blocks*/
var welcome_block = {
    type: 'html-keyboard-response',
    stimulus: 
    '<div style="text-align:center"><p>Welcome to Part One.</p><br>\
    <p>In thiss experiment, each trial will present a large shape made out of smaller shapess.</p>\
    <p>For example, you may see a large <strong>X</strong> made out of smaller <strong>O</strong>`s. Or you may see a large <strong>O</strong> made out of smaller <strong>X</strong>`s.</p><br><br>\
    <p>You will be asked to identify either the large shape or the smaller shape.</p><br><br>\
    <p>If you select <strong>X</strong>, please press the <strong>X</strong> button on your keyboard.</p>\
    <p>If you select <strong>O</strong>, please press the <strong>O</strong> button on your keyboard.</p><br><br>\
    <p><i>Press any button to continue</i>'
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

var local_instructions_block = {
    type: 'html-keyboard-response',
    stimulus: '<p>For the following trials, please select <i>only</i> the <strong>small</strong> shape</p><br><br><p>Press any key to continue</p>',
    post_trial_gap: 2000
}
/* define trials */

var fixation = {
    type: 'image-keyboard-response',
    stimulus: 'https://sophiasdanial.github.io/gg-testing/images/fixation_cross.png',
    choices: jsPsych.NO_KEYS,
    trial_duration: 500,
    data: {
        test_part: 'fixation'
    }
}
/*define conditions*/

var global_array = {
    type: 'categorize-image',
    choices: ['x', 'o'],
    stimulus_duration: 50,
    trial_duration: 2500,
    post_trial_gap: 300,
    stimulus_height: 210,
    maintain_aspect_ratio: true,
    stimulus: jsPsych.timelineVariable('letters'),
    data: jsPsych.timelineVariable('data'),
    on_finish: function (data) {
        var correct = false;
        if (data.global_shape == 'black_h' && data.key_press == 'h') {
            correct = true;
        } else if (data.global_shape == 'black_s' && data.key_press == 's') {
            correct = true;
        }
        data.correct = correct;
    },
    correct_text: '<p style="font-size:100px;color:red"><strong>Correct!</strong></p>',
    incorrect_text: '<p style="font-size:100px;color:green"><strong>Incorrect!</strong></p>',
    timeout_message: '<p style="font-size:100px;color:orange"><strong>Too slow! Please respond faster!</strong></p>',
}

var local_array = {
    type: 'categorize-image',
    choices: ['x', 'o'],
    stimulus_duration: 50,
    trial_duration: 2500,
    post_trial_gap: 300,
    stimulus_height: 210,
    maintain_aspect_ratio: true,
    stimulus: jsPsych.timelineVariable('letters'),
    data: jsPsych.timelineVariable('data'),
    on_finish: function (data) {
        var correct = false;
        if (data.local_shape == 'h' && data.key_press == 'h') {
            correct = true;
        } else if (data.local_shape == 's' && data.key_press == 's') {
            correct = true;
        }
        data.correct = correct;
    },
    correct_text: '<p style="font-size:100px;color:red"><strong>Correct!</strong></p>',
    incorrect_text: '<p style="font-size:100px;color:green"><strong>Incorrect!</strong></p>',
    timeout_message: '<p style="font-size:100px;color:orange"><strong>Too slow! Please respond faster!</strong></p>',
}

/* test */
//set global local blocks

///////////////// Global block /////////////////////
var global_set = {
    timeline: [fixation, global_array],
    timeline_variables: [
        {shapes: 'https://sophiasdanial.github.io/gg-testing/images/black_XofXs.png'}, 
        {shapes: 'https://sophiasdanial.github.io/gg-testing/images/black_Xofcircles.png'},
        {shapes: 'https://sophiasdanial.github.io/gg-testing/images/black_circleofXs.png'},
        {shapes: 'https://sophiasdanial.github.io/gg-testing/images/black_circleofcircles.png'}
    ],
    sample: {
        type: 'fixed-repetitions',
        size: 4
    }
}

var global_block = {
    timeline: [global_instructions_block, global_set],
    data: {
        test_part: 'test'
    }
}
///////////////// Local block /////////////////////
var local_set = {
    timeline: [fixation, local_array],
    timeline_variables: [
        {shapes: 'https://sophiasdanial.github.io/gg-testing/images/black_XofXs.png'}, 
        {shapes: 'https://sophiasdanial.github.io/gg-testing/images/black_Xofcircles.png'},
        {shapes: 'https://sophiasdanial.github.io/gg-testing/images/black_circleofXs.png'},
        {shapes: 'https://sophiasdanial.github.io/gg-testing/images/black_circleofcircles.png'}
    ],
    sample: {
        type: 'fixed-repetitions',
        size: 4
    }
}

var local_block = {
    timeline: [local_instructions_block, local_set],
    data: {
        test_part: 'test'
    }
}

/* set conditional timelines */
timeline.push(welcome_block);
timeline.push(local_block);
timeline.push(global_block);
timeline.push(end_block);

/* define results */

var total_trials = jsPsych.data.get().filter({
    test_part: 'test'
}).count();
var congruent_rt = Math.round(jsPsych.data.get().filter({
    correct: true,
    stim_type: 'congruent'
}).select('rt').mean());
var incongruent_rt = Math.round(jsPsych.data.get().filter({
    correct: true,
    stim_type: 'incongruent'
}).select('rt').mean());