public class Countofpairs {
	
	public static void main(String args[]) 
    { 
        int[] arr = {30,20,150,100,40}; 
       
        getPairsCount(arr); 
    }
   
    public static void getPairsCount(int[] arr) 
       { 
 
        int sum;
        int count = 0;
       
        for (int i = 0; i < arr.length; i++) 
            for (int j = i + 1; j < arr.length; j++) {        
               sum = arr[i] + arr[j];
       
               if(sum%60 == 0) 
        {
        	      
                    count++; 
  
        }
        
        }
             
        System.out.printf("Count of pairs is %d",count); 
    } 
    
    
}
