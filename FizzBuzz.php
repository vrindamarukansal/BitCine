<?php

class FizzBuzz

{

        public function fizzbuzz() {

                for ($i = 0; $i < 100; $i++) {

                        if (i % 15 == 0) echo 'FizzBuzz';

                        else if (i % 3 == 0) echo 'Fizz';

                        else if (i % 3) echo 'Buzz';

                        else echo $i;

                }

        }

}
?>