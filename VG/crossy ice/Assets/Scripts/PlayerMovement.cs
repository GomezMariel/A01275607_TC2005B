/*
    Script that controls the player movement so that it's in tiles
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    public int upperLimitX;
    public int bottomLimitX;
    public int upperLimitY;
    public int bottomLimitY;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.RightArrow) && transform.position.x < upperLimitX) {
            transform.Translate(new Vector3(1, 0, 0));
        } 

        else if (Input.GetKeyDown(KeyCode.LeftArrow) && transform.position.x > bottomLimitX) {
            transform.Translate(new Vector3(-1, 0, 0));
        } 
        
        else if (Input.GetKeyDown(KeyCode.UpArrow) && transform.position.y < upperLimitY) {
            transform.Translate(new Vector3(0, 1, 0));
        } 
        
        else if (Input.GetKeyDown(KeyCode.DownArrow) && transform.position.y > bottomLimitY) {
            transform.Translate(new Vector3(0, -1, 0));
        }
    }
}
