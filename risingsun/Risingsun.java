import objectdraw.*;
/**
 * Write a description of class Risingsun here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Risingsun extends WindowController
{
    
   
    private FilledOval sun;
    private Text instructions;
    
    public void begin()
    {
         sun = new FilledOval (150, 350, 100, 100, canvas);
        
        instructions = new Text ( " Please click the mouse repeatedly", 20, 20, canvas );
        
        
    }
    
    public void onMouseClick(Location point)
    {
        sun.move(0, -10);
        instructions.hide();
    }
    
    public void onMouseExit(Location point)
    {
        sun.moveTo(150, 350);
        instructions.show();
    }
    
}
