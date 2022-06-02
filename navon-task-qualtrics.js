Qualtrics.SurveyEngine.addOnload(function () {
  //adapted from Kyoung Whan Choe
  
    var qthis = this;

    qthis.hideNextButton();

    var task_github = "https://sophiasdanial.github.io/jsPsych-Navon-Task/";

    var requiredResources = [
        task_github + "js/jspsych/jspsych.js",
        task_github + "js/jspsych/plugins/jspsych-html-keyboard-response.js",
        task_github + "js/jspsych/plugins/jspsych-image-keyboard-response.js",
	    task_github + "js/jspsych/plugins/jspsych-preload.js",
        task_github + "Local-Navon-Condition.js"
    ];

    function loadScript(idx) {
        console.log("Loading ", requiredResources[idx]);
        jQuery.getScript(requiredResources[idx], function () {
            if ((idx + 1) < requiredResources.length) {
                loadScript(idx + 1);
            } else {
                initExp();
            }
        });
    }

    if (window.Qualtrics && (!window.frameElement || window.frameElement.id !== "mobile-preview-view")) {
        loadScript(0);
    }

    jQuery("<div id = 'display_stage_background'></div>").appendTo('body');
    jQuery("<div id = 'display_stage'></div>").appendTo('body');
  
    function initExp() {

        jsPsych.init({
            timeline: timeline,
            display_element: 'display_stage',
            on_finish: function (data) {
                
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
                var local_congruent_rt = Math.round(jsPsych.data.get().filter({
                    correct: true,
                    stim_type: 'congruent',
                    test_type: 'local'
                }).select('rt').mean());
                var global_incongruent_rt = Math.round(jsPsych.data.get().filter({
                    correct: true,
                    stim_type: 'incongruent',
                    test_type: 'global'
                }).select('rt').mean());
                var local_incongruent_rt = Math.round(jsPsych.data.get().filter({
                    correct: true,
                    stim_type: 'incongruent',
                    test_type: 'local'
                }).select('rt').mean());
                var XofX = jsPsych.data.get().filter({
                    global_shape: 'black_X',
                    local_shape: 'Xs'
                }).select('rt').values;
                var XofO = jsPsych.data.get().filter({
                    global_shape: 'black_X',
                    local_shape: 'circles'
                }).select('rt').values;
                var OofO = jsPsych.data.get().filter({
                    global_shape: 'black_circle',
                    local_shape: 'circles'
                }).select('rt').values;
                var OofX = jsPsych.data.get().filter({
                    global_shape: 'black_circles',
                    local_shape: 'Xs'
                }).select('rt').values;

                Qualtrics.SurveyEngine.setEmbeddedData("rt", rt);
                Qualtrics.SurveyEngine.setEmbeddedData("error", wrong_trials);
                Qualtrics.SurveyEngine.setEmbeddedData("global_congruent_rt", global_congruent_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("local_congruent_rt", local_congruent_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("global_incongruent_rt", global_incongruent_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("local_incongruent_rt", local_incongruent_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("XofX", XofX);
                Qualtrics.SurveyEngine.setEmbeddedData("XofO", XofO);
                Qualtrics.SurveyEngine.setEmbeddedData("OofO", OofO);
                Qualtrics.SurveyEngine.setEmbeddedData("OofX", OofX);
              
                jQuery('#display_stage').remove();
                jQuery('#display_stage_background').remove();

                qthis.clickNextButton();
            }
        });
    }
});

Qualtrics.SurveyEngine.addOnReady(function () {
    /*Place your JavaScript here to run when the page is fully displayed*/

});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/

});
