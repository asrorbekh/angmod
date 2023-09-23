MyApp.filter('numberFormat', function() {
    return function(input) {
        if(!input){
            return  input;
        }

        let output = '';
        let inputStr = input.toString().split('').reverse().join('');

        for (let i = 0; i < inputStr.length; i++) {
            if (i > 0 && i % 3 === 0) {
                output += ' ';
            }
            output += inputStr[i];
        }

        return output.split('').reverse().join('');
    };
});