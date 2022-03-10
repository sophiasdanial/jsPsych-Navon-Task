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

/* define trials */

var instructions_block = {
    type: 'html-keyboard-response',
    stimulus: '<p>For the following trials, please select <i>only</i> the large letter</p>',
    post_trial_gap: 2000
};
timeline.push(instructions_block);

var fixation = {
    type: 'image-keyboard-response',
    stimulus: 'https://sophiasdanial.github.io/gg-testing/images/fixation_cross.png',
    choices: jsPsych.NO_KEYS,
    trial_duration: 500,
    data: {
        test_part: 'fixation'
    }
}

var global_incongruent = {
    type: 'image-keyboard-response',
    choices: ['h', 's'],
    stimulus_duration: 50,
    trial_duration: null,
    post_trial_gap: 300,
    stimulus: jsPsych.timelineVariable('letters'),
    stimulus_height: 210,
    maintain_aspect_ratio: true,
    randomize_order: true,
    test_part: 'test'

}

/* test */
var test_procedure = {
    timeline: [fixation, global_incongruent],
    timeline_variables: [
        {letters: 'https://sophiasdanial.github.io/gg-testing/images/black_h_of_h.png'}, 
        {letters: 'https://sophiasdanial.github.io/gg-testing/images/black_h_of_s.png'},
        {letters: 'https://sophiasdanial.github.io/gg-testing/images/black_s_of_h.png'},
        {letters: 'https://sophiasdanial.github.io/gg-testing/images/black_s_of_s.png'}
    ],
    sample: {
        type: 'fixed-repetitions',
        size: 4
    },
    repetitions: 10,
    randomize_order: true
}
timeline.push(test_procedure);