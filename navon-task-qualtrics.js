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
        task_github + "js/jspsych/plugins/jspsych-fullscreen.js",
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
                var rt = jsPsych.data.get().filter({
                    correct: true
                }).select('rt').mean();
                var global_congruent_rt = jsPsych.data.get().filter({
                    correct: true,
                    stim_type: 'congruent',
                    test_type: 'global'
                }).select('rt').mean();
                var local_congruent_rt = jsPsych.data.get().filter({
                    correct: true,
                    stim_type: 'congruent',
                    test_type: 'local'
                }).select('rt').mean();
                var global_incongruent_rt = jsPsych.data.get().filter({
                    correct: true,
                    stim_type: 'incongruent',
                    test_type: 'global'
                }).select('rt').mean();
                var local_incongruent_rt = jsPsych.data.get().filter({
                    correct: true,
                    stim_type: 'incongruent',
                    test_type: 'local'
                }).select('rt').mean();
                var HofH = jsPsych.data.get().filter({
                    correct: true,
                    global_shape: 'black_h',
                    local_shape: 'h'
                }).select('rt').values;
                var HofS = jsPsych.data.get().filter({
                    correct: true,
                    global_shape: 'black_h',
                    local_shape: 's'
                }).select('rt').values;
                var SofS = jsPsych.data.get().filter({
                    correct: true,
                    global_shape: 'black_s',
                    local_shape: 's'
                }).select('rt').values;
                var SofH = jsPsych.data.get().filter({
                    correct: true,
                    global_shape: 'black_s',
                    local_shape: 's'
                }).select('rt').values;
                var Lc_sd = jsPsych.data.get().filter({
                    correct: true,
                    test_type: 'local',
                    stim_type: 'congruent',
                }).select('rt').sd();
                
                var Lic_sd = jsPsych.data.get().filter({
                    correct: true,
                    test_type: 'local',
                    stim_type: 'incongruent',
                }).select('rt').sd();
                
                var Gc_sd = jsPsych.data.get().filter({
                    correct: true,
                    test_type: 'global',
                    stim_type: 'congruent',
                }).select('rt').sd();
                
                var GIc_sd = jsPsych.data.get().filter({
                    correct: true,
                    test_type: 'global',
                    stim_type: 'incongruent',
                }).select('rt').sd();

                Qualtrics.SurveyEngine.setEmbeddedData("rt", rt);
                Qualtrics.SurveyEngine.setEmbeddedData("error", wrong_trials);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_globalincon", error_globalincongruent);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_globalcon", error_globalcongruent);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_localincon", error_localincongruent);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_localcon", error_localcongruent);
                Qualtrics.SurveyEngine.setEmbeddedData("correct", correct_trials);
                Qualtrics.SurveyEngine.setEmbeddedData("global_congruent_rt", global_congruent_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("local_congruent_rt", local_congruent_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("global_incongruent_rt", global_incongruent_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("local_incongruent_rt", local_incongruent_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("HofH", HofH);
                Qualtrics.SurveyEngine.setEmbeddedData("HofS", HofS);
                Qualtrics.SurveyEngine.setEmbeddedData("SofS", SofS);
                Qualtrics.SurveyEngine.setEmbeddedData("SofH", SofH);
                Qualtrics.SurveyEngine.setEmbeddedData("local_in_sd", Lic_sd);
                Qualtrics.SurveyEngine.setEmbeddedData("local_c_sd", Lc_sd);
                Qualtrics.SurveyEngine.setEmbeddedData("global_in_sd", GIc_sd);
                Qualtrics.SurveyEngine.setEmbeddedData("global_c_sd", Gc_sd);

                ////below for prime condition

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

                Qualtrics.SurveyEngine.setEmbeddedData("wrong_incon", error_incongruent);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_con", error_congruent);
              
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
