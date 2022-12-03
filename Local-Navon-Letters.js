//* based on jsPsych v6.x 
/* Navon Task - Letters*/
var timeline = [];
var repo_site = 'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/'
/* preload media */
var preload = {
    type: 'preload',
    show_progress_bar: true,
    message: 'Loading images... Please wait',
    images: [
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/fixation_cross.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/HofH_topL.png', 
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/HofH_topR.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/HofH_bottomL.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/HofH_bottomR.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/SofS_topL.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/SofS_topR.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/SofS_bottomL.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/SofS_bottomR.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/SofH_topL.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/SofH_topR.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/SofH_bottomL.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/SofH_bottomR.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/HofS_topL.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/HofS_topR.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/HofS_bottomL.png',
        'https://sophiasdanial.github.io/jsPsych-Navon-Task/images/HofS_bottomR.png',
    ],
    on_success: console.log('success')
}

/* define stimuli */

var test_stimuli = [
    {
      stimulus: repo_site + "HofH_topL.png",
      data: { 
          stim_type: 'congruent',
          global_shape: 'black_h',
          local_shape: 'h'}
    },
    {
        stimulus: repo_site + "HofH_topR.png",
        data: { 
            stim_type: 'congruent',
            global_shape: 'black_h',
            local_shape: 'h'}
    },
    {
        stimulus: repo_site + "HofH_bottomL.png",
        data: { 
            stim_type: 'congruent',
            global_shape: 'black_h',
            local_shape: 'h'}
    },
    {
        stimulus: repo_site + "HofH_bottomR.png",
        data: { 
            stim_type: 'congruent',
            global_shape: 'black_h',
            local_shape: 'h'}
    },
    {
      stimulus: repo_site + "SofS_topL.png",
      data: {  
          stim_type: 'congruent',
          global_shape: 'black_s',
          local_shape: 's'}
    },
    {
        stimulus: repo_site + "SofS_topR.png",
        data: {  
            stim_type: 'congruent',
            global_shape: 'black_s',
            local_shape: 's'}
    },
    {
        stimulus: repo_site + "SofS_bottomL.png",
        data: {  
            stim_type: 'congruent',
            global_shape: 'black_s',
            local_shape: 's'}
    },
    {
        stimulus: repo_site + "SofS_bottomR.png",
        data: {  
            stim_type: 'congruent',
            global_shape: 'black_s',
            local_shape: 's'}
    },
    {
      stimulus: repo_site + "HofS_topL.png",
      data: { 
          stim_type: 'incongruent',
          global_shape: 'black_h',
          local_shape: 's'}
    },
    {
        stimulus: repo_site + "HofS_topR.png",
        data: { 
            stim_type: 'incongruent',
            global_shape: 'black_h',
            local_shape: 's'}
    },
    {
        stimulus: repo_site + "HofS_bottomL.png",
        data: { 
            stim_type: 'incongruent',
            global_shape: 'black_h',
            local_shape: 's'}
    },
    {
        stimulus: repo_site + "HofS_bottomR.png",
        data: { 
            stim_type: 'incongruent',
            global_shape: 'black_h',
            local_shape: 's'}
    },
    {
      stimulus: repo_site + "SofH_topL.png",
      data: { 
          stim_type: 'incongruent',
          global_shape: 'black_s',
          local_shape: 'h'}
    },
    {
        stimulus: repo_site + "SofH_topR.png",
        data: { 
            stim_type: 'incongruent',
            global_shape: 'black_s',
            local_shape: 'h'}
    },
    {
        stimulus: repo_site + "SofH_bottomL.png",
        data: { 
            stim_type: 'incongruent',
            global_shape: 'black_s',
            local_shape: 'h'}
    },
    {
        stimulus: repo_site + "SofH_bottomR.png",
        data: { 
            stim_type: 'incongruent',
            global_shape: 'black_s',
            local_shape: 'h'}
      }
];

/*text blocks*/
var welcome_block = {
    type: 'html-keyboard-response',
    stimulus: 
    '<div style="text-align:center;font-size:23px"><p>Welcome to Part III.</p><br>\
    <p>Part III is very similar to Part I. This is a <strong>timed</strong> activity. Please try to be as <strong>fast</strong> and <strong>accurate</strong> as possible.</p><br>\
    <p>Just like Part I, each trial will present a large letter made out of smaller letters.</p>\
    <p>However this time, you may see a large <strong>H</strong> made out of smaller <strong>S</strong>`s. Or you may see a large <strong>S</strong> made out of smaller <strong>H</strong>`s.</p><br>\
    <p>You will be asked to identify either the large letter or the smaller letter.</p><br><br>\
    <p>If you select <strong>H</strong>, please press the <strong>H</strong> button on your keyboard.</p>\
    <p>If you select <strong>S</strong>, please press the <strong>S</strong> button on your keyboard.</p><br><br>\
    <p><i>Press any button to continue</i>',
    post_trial_gap: 3000
}

var end_block = {
    type: 'html-keyboard-response',
    stimulus:
    '<div style="text-align:center;font-size: 23px""><p>Congratulations! You have completed Part III.<br>Press any button to move on to your debriefing</p>'
}

var global_instructions_block = {
    type: 'html-keyboard-response',
    stimulus: '<p style="font-size: 23px">For the following trials, please select <i>only</i> the <strong>large</strong> letter</p><br><br><p>Press any key to continue</p>',
    post_trial_gap: 2000
}

var local_instructions_block = {
    type: 'html-keyboard-response',
    stimulus: '<p style="font-size: 23px">For the following trials, please select <i>only</i> the <strong>small</strong> letter</p><br><br><p>Press any key to continue</p>',
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
    choices: ['h', 's'],
    stimulus_duration: 50,
    response_ends_trial: true,
    post_trial_gap: 300,
    stimulus_height: 750,
    maintain_aspect_ratio: true,
    stimulus: jsPsych.timelineVariable('stimulus'),
    data: jsPsych.timelineVariable('data'),
    on_finish: function (data) {
        var correct = false;
        if (data.global_shape == 'black_h' && data.response == 'h') {
            correct = true;
        } else if (data.global_shape == 'black_s' && data.response == 's') {
            correct = true;
        }
        data.correct = correct;
        jsPsych.data.get().addToLast({test_type: 'global'})
    },
    
}

var local_array = {
    type: 'image-keyboard-response',
    choices: ['h', 's'],
    stimulus_duration: 50,
    response_ends_trial: true,
    post_trial_gap: 300,
    stimulus_height: 750,
    maintain_aspect_ratio: true,
    stimulus: jsPsych.timelineVariable('stimulus'),
    data: jsPsych.timelineVariable('data'),
    on_finish: function (data) {
        var correct = false;
        if (data.local_shape == 'h' && data.response == 'h') {
            correct = true;
        } else if (data.local_shape == 's' && data.response == 's') {
            correct = true;
        }
        data.correct = correct;
        jsPsych.data.get().addToLast({test_type: 'local'})
    }
}

/* test */
//set global local blocks

///////////////// Global block /////////////////////
var global_set = {
    timeline: [fixation, global_array],
    timeline_variables: test_stimuli,
    randomize_order: true,
}

var global_block = {
    timeline: [global_instructions_block, global_set]
    
}
///////////////// Local block /////////////////////
var local_set = {
    timeline: [fixation, local_array],
    timeline_variables: test_stimuli,
    randomize_order: true,
}

var local_block = {
    timeline: [local_instructions_block, local_set],
}

/* set conditional timelines */
var local_start_node = {
    timeline: [local_block, global_block],
    repetitions: 5
}

timeline.push(preload);
timeline.push(welcome_block);
timeline.push(local_start_node);
timeline.push(end_block);

/* define results */

var correct_trials = jsPsych.data.get().filter({
    correct: true
}).count();
var wrong_trials = jsPsych.data.get().filter({
    correct: false
}).count();
var error_globalcongruent = jsPsych.data.get().filter({
    correct: false,
    stim_type: 'congruent',
    test_type: 'global'
}).count();
var error_globalincongruent = jsPsych.data.get().filter({
    correct: false,
    stim_type: 'incongruent',
    test_type: 'global'
}).count();
var error_localcongruent = jsPsych.data.get().filter({
    correct: false,
    stim_type: 'congruent',
    test_type: 'local'
}).count();
var error_localincongruent = jsPsych.data.get().filter({
    correct: false,
    stim_type: 'incongruent',
    test_type: 'local'
}).count();
var total_rt = jsPsych.data.get().filter({
    correct: true, 
}).select('rt').sum();
///////trial-by-trial capture for Qualtrics////////
var local_in_raw = jsPsych.data.get().filter({
    correct: true,
    test_type: 'local',
    stim_type: 'incongruent'
}).select('rt').values;
var local_c_raw = jsPsych.data.get().filter({
    correct: true,
    test_type: 'local',
    stim_type: 'congruent'
}).select('rt').values;
var global_in_raw = jsPsych.data.get().filter({
    correct: true,
    test_type: 'global',
    stim_type: 'incongruent'
}).select('rt').values;
var global_c_raw = jsPsych.data.get().filter({
    correct: true,
    test_type: 'global',
    stim_type: 'congruent'
}).select('rt').values;
