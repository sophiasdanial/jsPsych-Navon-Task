//* based on jsPsych v6.x 
/* Navon Task - Letters*/
var timeline = [];
var repo_site = 'https://sophiasdanial.github.io/gg-testing/images/'
/* preload media */
var preload = {
    type: 'preload',
    stimulus: [
        {letters: 'https://sophiasdanial.github.io/gg-testing/images/black_h_of_h.png'}, 
        {letters: 'https://sophiasdanial.github.io/gg-testing/images/black_h_of_s.png'},
        {letters: 'https://sophiasdanial.github.io/gg-testing/images/black_s_of_h.png'},
        {letters: 'https://sophiasdanial.github.io/gg-testing/images/black_s_of_s.png'},
        {cross: 'https://sophiasdanial.github.io/gg-testing/images/fixation_cross.png'}
    ]
}
timeline.push(preload)

/* define stimuli */

var test_stimuli = [
    {
      stimulus: repo_site + "black_h_of_h.png",
      data: { 
          stim_type: 'congruent',
          global_shape: 'black_s',
          local_shape: 's'}
    },
    {
      stimulus: repo_site + "black_s_of_s.png",
      data: {  
          stim_type: 'congruent',
          global_shape: 'black_s',
          local_shape: 's'}
    },
    {
      stimulus: repo_site + "black_h_of_s",
      data: { 
          stim_type: 'incongruent',
          global_shape: 'black_h',
          local_shape: 's'}
    },
    {
      stimulus: repo_site + "black_s_of_h",
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
    '<div style="text-align:center;line-height:0.7"><p>Welcome to Part Three.</p><br>\
    <p>This is a <strong>timed</strong> activity. Please try to be as <strong>fast</strong> and <strong>accurate</strong> as possible.</p><br><br>\
    <p>Similar to Part One, each trial will present a large letter made out of smaller letters.</p>\
    <p>For example, you may see a large <strong>H</strong> made out of smaller <strong>S</strong>`s. Or you may see a large <strong>S</strong> made out of smaller <strong>H</strong>`s.</p><br><br>\
    <p>You will be asked to identify either the large letter or the smaller letter.</p><br><br>\
    <p>If you select <strong>H</strong>, please press the <strong>H</strong> button on your keyboard.</p>\
    <p>If you select <strong>S</strong>, please press the <strong>S</strong> button on your keyboard.</p><br><br>\
    <p><i>Press any button to continue</i>'
}

var global_instructions_block = {
    type: 'html-keyboard-response',
    stimulus: '<p>For the following trials, please select <i>only</i> the <strong>large</strong> letter</p><br><br><p>Press any key to continue</p>',
    post_trial_gap: 2000
}

var local_instructions_block = {
    type: 'html-keyboard-response',
    stimulus: '<p>For the following trials, please select <i>only</i> the <strong>small</strong> letter</p><br><br><p>Press any key to continue</p>',
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
    type: 'image-keyboard-response',
    choices: ['h', 's'],
    stimulus_duration: 50,
    response_ends_trial: true,
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
    }
    
}

var local_array = {
    type: 'image-keyboard-response',
    choices: ['h', 's'],
    stimulus_duration: 50,
    response_ends_trial: true,
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
    }
}

/* test */
//set global local blocks

///////////////// Global block /////////////////////
var global_set = {
    timeline: [fixation, global_array],
    timeline_variables: [
        {letters: 'https://sophiasdanial.github.io/gg-testing/images/black_h_of_h.png'}, 
        {letters: 'https://sophiasdanial.github.io/gg-testing/images/black_h_of_s.png'},
        {letters: 'https://sophiasdanial.github.io/gg-testing/images/black_s_of_h.png'},
        {letters: 'https://sophiasdanial.github.io/gg-testing/images/black_s_of_s.png'}
    ],
    sample: {
        type: 'fixed-repetitions',
        size: 4
    }
}

var global_block = {
    timeline: [global_instructions_block,global_set],
    timeline_variables: [
        {letters: 'https://sophiasdanial.github.io/gg-testing/images/black_h_of_h.png'}, 
        {letters: 'https://sophiasdanial.github.io/gg-testing/images/black_h_of_s.png'},
        {letters: 'https://sophiasdanial.github.io/gg-testing/images/black_s_of_h.png'},
        {letters: 'https://sophiasdanial.github.io/gg-testing/images/black_s_of_s.png'}
    ]
}
///////////////// Local block /////////////////////
var local_set = {
    timeline: [fixation, local_array],
    timeline_variables: [
        {letters: 'https://sophiasdanial.github.io/gg-testing/images/black_h_of_h.png'}, 
        {letters: 'https://sophiasdanial.github.io/gg-testing/images/black_h_of_s.png'},
        {letters: 'https://sophiasdanial.github.io/gg-testing/images/black_s_of_h.png'},
        {letters: 'https://sophiasdanial.github.io/gg-testing/images/black_s_of_s.png'}
    ],
    sample: {
        type: 'fixed-repetitions',
        size: 4
    }
}

var local_block = {
    timeline: [local_instructions_block, local_set],
    timeline_variables: [
        {letters: 'https://sophiasdanial.github.io/gg-testing/images/black_h_of_h.png'}, 
        {letters: 'https://sophiasdanial.github.io/gg-testing/images/black_h_of_s.png'},
        {letters: 'https://sophiasdanial.github.io/gg-testing/images/black_s_of_h.png'},
        {letters: 'https://sophiasdanial.github.io/gg-testing/images/black_s_of_s.png'}
    ]
}

/* set conditional timelines */
timeline.push(welcome_block);
timeline.push(local_block);
timeline.push(global_block);


/* define results */

var trials = jsPsych.data.get().filter({
    test_part: 'test'
});
var congruent_rt = Math.round(jsPsych.data.get().filter({
    correct: true,
    stim_type: 'congruent'
}).select('rt').mean());
var incongruent_rt = Math.round(jsPsych.data.get().filter({
    correct: true,
    stim_type: 'incongruent'
}).select('rt').mean());