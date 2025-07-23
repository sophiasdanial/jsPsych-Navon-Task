Qualtrics.SurveyEngine.addOnload(function () {
  //adapted from Kyoung Whan Choe
  document.addEventListener("visibilitychange", () => {
        if (document.visibilityState == "visible") {
        Qualtrics.SurveyEngine.setEmbeddedData("NPbrowser_interaction", active);
        } else {
        Qualtrics.SurveyEngine.setEmbeddedData("NPbrowser_interaction", change);
        }
    });
    
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
                var total_rt = jsPsych.data.get().select('rt').sum();
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
               
                Qualtrics.SurveyEngine.setEmbeddedData("error", wrong_trials);
                Qualtrics.SurveyEngine.setEmbeddedData("correct", correct_trials);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_globalincon", error_globalincongruent);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_globalcon", error_globalcongruent);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_localincon", error_localincongruent);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_localcon", error_localcongruent);
                Qualtrics.SurveyEngine.setEmbeddedData("total_rt", total_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("local_I_raw", local_in_raw);
                Qualtrics.SurveyEngine.setEmbeddedData("local_C_raw", local_c_raw);
                Qualtrics.SurveyEngine.setEmbeddedData("global_I_raw", global_in_raw);
                Qualtrics.SurveyEngine.setEmbeddedData("global_C_raw", global_c_raw);
               
                ////below for prime condition

                /* define results */
                var total_rt = jsPsych.data.get().select('rt').sum();
                var correct_trials = jsPsych.data.get().filter({
                    correct: true,
                }).count();
                var wrong_trials = jsPsych.data.get().filter({
                    correct: false,
                }).count();
                var error_congruent = jsPsych.data.get().filter({
                    correct: false,
                    stim_type: 'congruent'
                }).count();
                var error_incongruent = jsPsych.data.get().filter({
                    correct: false,
                    stim_type: 'incongruent',
                }).count();
                ///////trial-by-trial capture for Qualtrics *per block////////
                var c_raw = jsPsych.data.get().filter({
                    correct: true,
                    stim_type: 'congruent'
                }).select('rt').values;
                var in_raw = jsPsych.data.get().filter({
                    correct: true,
                    stim_type: 'incongruent'
                }).select('rt').values;

                Qualtrics.SurveyEngine.setEmbeddedData("NP_totalRT", total_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("NP_correct", correct_trials);
                Qualtrics.SurveyEngine.setEmbeddedData("NP_wrong", wrong_trials);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_incon", error_incongruent);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_con", error_congruent);
                Qualtrics.SurveyEngine.setEmbeddedData("con_rt", c_raw);
                Qualtrics.SurveyEngine.setEmbeddedData("incon_rt", in_raw);
               
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
