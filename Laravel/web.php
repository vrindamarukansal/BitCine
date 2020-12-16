<?php  
use Laravel\Organization;  

//1. Get list of all active users 
Route::get('/read',function(){  
    $users=Organization::where('active',TRUE);  
    foreach($users as $user)  
    {  
        echo $user->body;  
        echo <br>;  
    }  
});  

//2. Oldest inactive user
Route::get('/find',function(){  
    $users=Organization::where('active',FALSE)
                        ->orderBy('creation_date')
                        ->first();  
    foreach($users as $user)  
    {  
      echo $user->body;  
      echo <br>;  
    }  
}); 

//3. Insert a new user
Route::get('/insert',function(){  
    $user=new Organization;  
    $user->title='John Doe';  
    $user->email='johndoe@example.com';
    $user->password=Hash::make('123456');
    $user->active=TRUE;  
    $user->save();  
}); 

//4. Delete all inactive
Route::get('/delete',function(){  
    $user=Organization::where('active',FALSE)->delete();  
    });

// 5. Soft deletes
Route::get('/softdelete',function(){  
    Organization::find(1)->delete();  
    });  

// 6. mass update
Route::get('/update',function(){  
    Organization::where('active',TRUE)
                whereDate('creation_date','>',Carbon::now()->subDays(60))
                ->update(['active'=>FALSE]);  
    });