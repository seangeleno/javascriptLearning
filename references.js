/**
 * Created by seanestevaKiosked on 3/15/16.
 */
var james = {
    job: "programmer",
    married: false,
    sayJob: function(job) {
        // complete this method
        console.log("Hi, I work as a " + james.job)
    }
};

// james' first job
james.sayJob();

// change james' job to "super programmer" here
james.job = "super programmer";

// james' second job
james.sayJob();
