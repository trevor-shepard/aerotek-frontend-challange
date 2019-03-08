class DateUtil {
    constructor(startDate){
        this.startDate = startDate
        
        // determine leap year and number of days in month
        this.setVariables.call(this);

    }

    setVariables() {
        // set current year
        this.currYear = this.startDate.getFullYear();
        
        // set current day
        this.currMonth = this.startDate.getMonth();
        
        // set number of days in each month
        this.daysInMonths = {
            0: 31,
            1: 28,
            2: 31,
            3: 30,
            4: 31,
            5: 30,
            6: 31,
            7: 31,
            8: 30,
            9: 31,
            10: 30,
            11: 31
        };
    
        // Check for leap year
        if ((!(this.currYear % 4) && (this.currYear % 100)) || !(this.currYear % 400)) {
            this.daysInMonths[1] = 29;
        };
        
    }

    getDayFromDate(date, int) {
        let newDate = new Date()

        // check if date is in the next month
        if ((date.getDate() + int) > this.daysInMonths[date.getMonth()] ) {

            // check for new year
            if (date.getMonth() === 11){
                newDate.setFullYear(this.currYear + 1)
                newDate.setMonth(0)
            } else {
                newDate.setMonth(this.currMonth + 1)
            }
            // overlap into next month
            const overlap = (date.getDate() + int) - this.daysInMonths[date.getMonth()] 

            newDate.setDate(overlap)
            return newDate
        }


        newDate.setDate(date.getDate() + int)
        return newDate
    };


    // calculate number of days needed to complete service action. Supposing Engineers work 8 hours shifts and do not work on weekends
    calcEndDate(startDate, hours) {
        let count = 0
        
        while (hours >= 8) {
            hours -= 8
            count += 1
        }; 

        // set the date hour to appropriate end time
        let result = this.getDayFromDate(startDate, count)
        result.setHours(8 + hours)
        return result
    };

    calcDaysAhead(date) {
        
        return Math.floor((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate()) ) /(1000 * 60 * 60 * 24));
    }


    parseDate(string) {
        let variables = string.split('-')
        variables[1] = parseInt(variables[1]) -1
        
        
        return new Date(...variables)
    }
};


export default DateUtil;