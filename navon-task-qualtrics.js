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
                // browser size capture
                var browserNavonTest = jsPsych.data.getInteractionData();
                i
                Qualtrics.SurveyEngine.setEmbeddedData("error", wrong_trials);
                Qualtrics.SurveyEngine.setEmbeddedData("correct", correct_trials);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_globalincon", error_globalincongruent);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_globalcon", error_globalcongruent);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_localincon", error_localincongruent);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_localcon", error_localcongruent);
                Qualtrics.SurveyEngine.setEmbeddedData("total_rt", total_rt);
                Qualtrics.SurveyEngine.setEmbeddedData("local_I_rt", local_in_raw);
                Qualtrics.SurveyEngine.setEmbeddedData("local_C_raw", local_c_raw);
                Qualtrics.SurveyEngine.setEmbeddedData("global_I_rt", global_in_raw);
                Qualtrics.SurveyEngine.setEmbeddedData("global_C_rt", global_c_raw);
                Qualtrics.SurveyEngine.setEmbeddedData("browserNT", browserNavonTest);
                

                ////below for prime condition

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
                
                Qualtrics.SurveyEngine.setEmbeddedData("NP_totalRT", total_rt);

                Qualtrics.SurveyEngine.setEmbeddedData("NP_correct1", correct_trials1);
                Qualtrics.SurveyEngine.setEmbeddedData("NP_wrong1", wrong_trials1);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_incon1", error_incongruent1);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_con1", error_congruent1);
                Qualtrics.SurveyEngine.setEmbeddedData("con_rt1", c_raw1);
                Qualtrics.SurveyEngine.setEmbeddedData("incon_rt1", in_raw1);

                Qualtrics.SurveyEngine.setEmbeddedData("NP_correct2", correct_trials2);
                Qualtrics.SurveyEngine.setEmbeddedData("NP_wrong2", wrong_trials2);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_incon2", error_incongruent2);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_con2", error_congruent2);
                Qualtrics.SurveyEngine.setEmbeddedData("con_rt2", c_raw2);
                Qualtrics.SurveyEngine.setEmbeddedData("incon_rt2", in_raw2);

                Qualtrics.SurveyEngine.setEmbeddedData("NP_correct3", correct_trials3);
                Qualtrics.SurveyEngine.setEmbeddedData("NP_wrong3", wrong_trials3);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_incon3", error_incongruent3);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_con3", error_congruent3);
                Qualtrics.SurveyEngine.setEmbeddedData("con_rt3", c_raw3);
                Qualtrics.SurveyEngine.setEmbeddedData("incon_rt3", in_raw3);

                Qualtrics.SurveyEngine.setEmbeddedData("NP_correct4", correct_trials4);
                Qualtrics.SurveyEngine.setEmbeddedData("NP_wrong4", wrong_trials4);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_incon4", error_incongruent4);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_con4", error_congruent4);
                Qualtrics.SurveyEngine.setEmbeddedData("con_rt4", c_raw4);
                Qualtrics.SurveyEngine.setEmbeddedData("incon_rt4", in_raw4);

                Qualtrics.SurveyEngine.setEmbeddedData("NP_correct5", correct_trials5);
                Qualtrics.SurveyEngine.setEmbeddedData("NP_wrong5", wrong_trials5);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_incon5", error_incongruent5);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_con5", error_congruent5);
                Qualtrics.SurveyEngine.setEmbeddedData("con_rt5", c_raw5);
                Qualtrics.SurveyEngine.setEmbeddedData("incon_rt5", in_raw5);

                Qualtrics.SurveyEngine.setEmbeddedData("NP_correct6", correct_trials6);
                Qualtrics.SurveyEngine.setEmbeddedData("NP_wrong6", wrong_trials6);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_incon6", error_incongruent6);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_con6", error_congruent6);
                Qualtrics.SurveyEngine.setEmbeddedData("con_rt6", c_raw6);
                Qualtrics.SurveyEngine.setEmbeddedData("incon_rt6", in_raw6);

                Qualtrics.SurveyEngine.setEmbeddedData("NP_correct7", correct_trials7);
                Qualtrics.SurveyEngine.setEmbeddedData("NP_wrong7", wrong_trials7);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_incon7", error_incongruent7);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_con7", error_congruent7);
                Qualtrics.SurveyEngine.setEmbeddedData("con_rt7", c_raw7);
                Qualtrics.SurveyEngine.setEmbeddedData("incon_rt7", in_raw7);

                Qualtrics.SurveyEngine.setEmbeddedData("NP_correct8", correct_trials8);
                Qualtrics.SurveyEngine.setEmbeddedData("NP_wrong8", wrong_trials8);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_incon8", error_incongruent8);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_con8", error_congruent8);
                Qualtrics.SurveyEngine.setEmbeddedData("con_rt8", c_raw8);
                Qualtrics.SurveyEngine.setEmbeddedData("incon_rt8", in_raw8);

                Qualtrics.SurveyEngine.setEmbeddedData("NP_correct9", correct_trials9);
                Qualtrics.SurveyEngine.setEmbeddedData("NP_wrong9", wrong_trials9);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_incon9", error_incongruent9);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_con9", error_congruent9);
                Qualtrics.SurveyEngine.setEmbeddedData("con_rt9", c_raw9);
                Qualtrics.SurveyEngine.setEmbeddedData("incon_rt9", in_raw9);

                Qualtrics.SurveyEngine.setEmbeddedData("NP_correct10", correct_trials10);
                Qualtrics.SurveyEngine.setEmbeddedData("NP_wrong10", wrong_trials10);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_incon10", error_incongruent10);
                Qualtrics.SurveyEngine.setEmbeddedData("wrong_con10", error_congruent10);
                Qualtrics.SurveyEngine.setEmbeddedData("con_rt10", c_raw10);
                Qualtrics.SurveyEngine.setEmbeddedData("incon_rt10", in_raw10);


                Qualtrics.SurveyEngine.setEmbeddedData("browserPrime", browserprime);

              
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
