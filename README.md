# BitCine
Code challenge

#FizzBuzz

<?php

class FizzBuzz

{

        public function fizzbuzz() {

                for ($i = 0; $i < 100; $i++) {

                        if (i % 15 == 0) echo 'FizzBuzz';

                        else if (i % 3 == 0) echo 'Fizz';

                        else if (i % 3) echo 'Buzz';

                        else echo $i

                }

        }

}
?>

#VowelFinder
<?php
$str = strtolower(trim(fgets(STDIN)););
$vowels = ['','a','e','i','o','u','y'];
$key=0;
for ($i = 0; $i < strlen($str); $i++){
    if(($key = array_search($str[$i], $vowels))!=false){
    	if($str[$i]=='y'){
        	if(($str[$i-1]!=' ')&&($i!=0)){
            	echo ($str[$i].','.$i.'\n');
                unset($vowels[$key]);
            }
            else if($str[$i+1]==' '){
            	echo ($str[$i].','.$i.'\n');
                unset($vowels[$key]);
            }
        }
        else {
    		echo ($str[$i].','.$i.'\n');
        	unset($vowels[$key]);
        }
    };
};
?>
