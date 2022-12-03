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

var enter_fullscreen = {
    type: 'fullscreen',
    fullscreen_mode: true
  }
timeline.push(enter_fullscreen);

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
    '<div style="text-align:center"><p>Welcome to Part I.</p><br>\
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
    '<div style="text-align:center"><p>Congratulations! You have completed Part I.<br>Press any button to move on to the next part</p>'
}

var local_instructions_block = {
    type: 'html-keyboard-response',
    stimulus: '<p>For the following trials, please select <i>only</i> the <strong>small</strong> shape</p><br><br><p>Press any key to continue</p>',
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
    stimulus_height: 750,
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
}

var local_block1 = {
    timeline: [local_instructions_block, local_set],
    data: {block:'1'}
}
var local_block2 = {
    timeline: [local_instructions_block, local_set],
    data: {block:'2'}
}
var local_block3 = {
    timeline: [local_instructions_block, local_set],
    data: {block:'3'}
}
var local_block4 = {
    timeline: [local_instructions_block, local_set],
    data: {block:'4'}
}
var local_block5 = {
    timeline: [local_instructions_block, local_set],
    data: {block:'5'}
}
var local_block6 = {
    timeline: [local_instructions_block, local_set],
    data: {block:'6'}
}
var local_block7 = {
    timeline: [local_instructions_block, local_set],
    data: {block:'7'}
}
var local_block8 = {
    timeline: [local_instructions_block, local_set],
    data: {block:'8'}
}
var local_block9 = {
    timeline: [local_instructions_block, local_set],
    data: {block:'9'}
}
var local_block10 = {
    timeline: [local_instructions_block, local_set],
    data: {block:'10'}
}
/* set conditional timelines */
timeline.push(preload);
timeline.push(welcome_block);
timeline.push(local_block1);
timeline.push(local_block2);
timeline.push(local_block3);
timeline.push(local_block4);
timeline.push(local_block5);
timeline.push(local_block6);
timeline.push(local_block7);
timeline.push(local_block8);
timeline.push(local_block9);
timeline.push(local_block10);
timeline.push(end_block);

/* define results */
var total_rt = jsPsych.data.get().select('rt').sum();

///block 1///
var correct_trials1 = jsPsych.data.get().filter({
    correct: true,
    block: '1'
}).count();
var wrong_trials1 = jsPsych.data.get().filter({
    correct: false,
    block: '1',
}).count();
var error_congruent1 = jsPsych.data.get().filter({
    correct: false,
    stim_type: 'congruent',
    block: '1',
}).count();
var error_incongruent1 = jsPsych.data.get().filter({
    correct: false,
    stim_type: 'incongruent',
    block: '1',
}).count();
///////trial-by-trial capture for Qualtrics *per block////////
var c_raw1 = jsPsych.data.get().filter({
    correct: true,
    stim_type: 'congruent',
    block: '1',
}).select('rt').values;
var in_raw1 = jsPsych.data.get().filter({
    correct: true,
    stim_type: 'incongruent',
    block: '1',
}).select('rt').values;

///block 2///
var correct_trials2 = jsPsych.data.get().filter({
    correct: true,
    block: '2'
}).count();
var wrong_trials2 = jsPsych.data.get().filter({
    correct: false,
    block: '2',
}).count();
var error_congruent2 = jsPsych.data.get().filter({
    correct: false,
    stim_type: 'congruent',
    block: '2',
}).count();
var error_incongruent2 = jsPsych.data.get().filter({
    correct: false,
    stim_type: 'incongruent',
    block: '2',
}).count();
///////trial-by-trial capture for Qualtrics *per block////////
var c_raw2 = jsPsych.data.get().filter({
    correct: true,
    stim_type: 'congruent',
    block: '2',
}).select('rt').values;
var in_raw2 = jsPsych.data.get().filter({
    correct: true,
    stim_type: 'incongruent',
    block: '2',
}).select('rt').values;

///block 3///
var correct_trials3 = jsPsych.data.get().filter({
    correct: true,
    block: '3'
}).count();
var wrong_trials3 = jsPsych.data.get().filter({
    correct: false,
    block: '3',
}).count();
var error_congruent3 = jsPsych.data.get().filter({
    correct: false,
    stim_type: 'congruent',
    block: '3',
}).count();
var error_incongruent3 = jsPsych.data.get().filter({
    correct: false,
    stim_type: 'incongruent',
    block: '3',
}).count();
///////trial-by-trial capture for Qualtrics *per block////////
var c_raw3 = jsPsych.data.get().filter({
    correct: true,
    stim_type: 'congruent',
    block: '3',
}).select('rt').values;
var in_raw3 = jsPsych.data.get().filter({
    correct: true,
    stim_type: 'incongruent',
    block: '3',
}).select('rt').values;

///block 4///
var correct_trials4 = jsPsych.data.get().filter({
    correct: true,
    block: '4'
}).count();
var wrong_trials4 = jsPsych.data.get().filter({
    correct: false,
    block: '4',
}).count();
var error_congruent4 = jsPsych.data.get().filter({
    correct: false,
    stim_type: 'congruent',
    block: '4',
}).count();
var error_incongruent4 = jsPsych.data.get().filter({
    correct: false,
    stim_type: 'incongruent',
    block: '4',
}).count();
///////trial-by-trial capture for Qualtrics *per block////////
var c_raw4 = jsPsych.data.get().filter({
    correct: true,
    stim_type: 'congruent',
    block: '4',
}).select('rt').values;
var in_raw4 = jsPsych.data.get().filter({
    correct: true,
    stim_type: 'incongruent',
    block: '4',
}).select('rt').values;

///block 5///
var correct_trials5 = jsPsych.data.get().filter({
    correct: true,
    block: '5'
}).count();
var wrong_trials5 = jsPsych.data.get().filter({
    correct: false,
    block: '5',
}).count();
var error_congruent5 = jsPsych.data.get().filter({
    correct: false,
    stim_type: 'congruent',
    block: '5',
}).count();
var error_incongruent5 = jsPsych.data.get().filter({
    correct: false,
    stim_type: 'incongruent',
    block: '5',
}).count();
///////trial-by-trial capture for Qualtrics *per block////////
var c_raw5 = jsPsych.data.get().filter({
    correct: true,
    stim_type: 'congruent',
    block: '5',
}).select('rt').values;
var in_raw5 = jsPsych.data.get().filter({
    correct: true,
    stim_type: 'incongruent',
    block: '5',
}).select('rt').values;

///block 6///
var correct_trials6 = jsPsych.data.get().filter({
    correct: true,
    block: '6'
}).count();
var wrong_trials6 = jsPsych.data.get().filter({
    correct: false,
    block: '6',
}).count();
var error_congruent6 = jsPsych.data.get().filter({
    correct: false,
    stim_type: 'congruent',
    block: '6',
}).count();
var error_incongruent6 = jsPsych.data.get().filter({
    correct: false,
    stim_type: 'incongruent',
    block: '6',
}).count();
///////trial-by-trial capture for Qualtrics *per block////////
var c_raw6 = jsPsych.data.get().filter({
    correct: true,
    stim_type: 'congruent',
    block: '6',
}).select('rt').values;
var in_raw6 = jsPsych.data.get().filter({
    correct: true,
    stim_type: 'incongruent',
    block: '6',
}).select('rt').values;

///block 7///
var correct_trials7 = jsPsych.data.get().filter({
    correct: true,
    block: '7'
}).count();
var wrong_trials7 = jsPsych.data.get().filter({
    correct: false,
    block: '7',
}).count();
var error_congruent7 = jsPsych.data.get().filter({
    correct: false,
    stim_type: 'congruent',
    block: '7',
}).count();
var error_incongruent7 = jsPsych.data.get().filter({
    correct: false,
    stim_type: 'incongruent',
    block: '7',
}).count();
///////trial-by-trial capture for Qualtrics *per block////////
var c_raw7 = jsPsych.data.get().filter({
    correct: true,
    stim_type: 'congruent',
    block: '7',
}).select('rt').values;
var in_raw7 = jsPsych.data.get().filter({
    correct: true,
    stim_type: 'incongruent',
    block: '7',
}).select('rt').values;

///block 8///
var correct_trials8 = jsPsych.data.get().filter({
    correct: true,
    block: '8'
}).count();
var wrong_trials8 = jsPsych.data.get().filter({
    correct: false,
    block: '8',
}).count();
var error_congruent8 = jsPsych.data.get().filter({
    correct: false,
    stim_type: 'congruent',
    block: '8',
}).count();
var error_incongruent8 = jsPsych.data.get().filter({
    correct: false,
    stim_type: 'incongruent',
    block: '8',
}).count();
///////trial-by-trial capture for Qualtrics *per block////////
var c_raw8 = jsPsych.data.get().filter({
    correct: true,
    stim_type: 'congruent',
    block: '8',
}).select('rt').values;
var in_raw8 = jsPsych.data.get().filter({
    correct: true,
    stim_type: 'incongruent',
    block: '8',
}).select('rt').values;

///block 9///
var correct_trials9 = jsPsych.data.get().filter({
    correct: true,
    block: '9'
}).count();
var wrong_trials9 = jsPsych.data.get().filter({
    correct: false,
    block: '9',
}).count();
var error_congruent9 = jsPsych.data.get().filter({
    correct: false,
    stim_type: 'congruent',
    block: '9',
}).count();
var error_incongruent9 = jsPsych.data.get().filter({
    correct: false,
    stim_type: 'incongruent',
    block: '9',
}).count();
///////trial-by-trial capture for Qualtrics *per block////////
var c_raw9 = jsPsych.data.get().filter({
    correct: true,
    stim_type: 'congruent',
    block: '9',
}).select('rt').values;
var in_raw9 = jsPsych.data.get().filter({
    correct: true,
    stim_type: 'incongruent',
    block: '9',
}).select('rt').values;

///block 10///
var correct_trials10 = jsPsych.data.get().filter({
    correct: true,
    block: '10'
}).count();
var wrong_trials10 = jsPsych.data.get().filter({
    correct: false,
    block: '10',
}).count();
var error_congruent10 = jsPsych.data.get().filter({
    correct: false,
    stim_type: 'congruent',
    block: '10',
}).count();
var error_incongruent10 = jsPsych.data.get().filter({
    correct: false,
    stim_type: 'incongruent',
    block: '10',
}).count();
///////trial-by-trial capture for Qualtrics *per block////////
var c_raw10 = jsPsych.data.get().filter({
    correct: true,
    stim_type: 'congruent',
    block: '10',
}).select('rt').values;
var in_raw10 = jsPsych.data.get().filter({
    correct: true,
    stim_type: 'incongruent',
    block: '10',
}).select('rt').values;

// browser size capture
var browserprime = jsPsych.data.getInteractionData();
