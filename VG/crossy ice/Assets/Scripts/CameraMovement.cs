/*
    Script that controls the camera's movement

    It should follow the player
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraMovement : MonoBehaviour
{
    public Transform player;
    public float offset;
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
        // get camera to get it's dimensions so it doesn't go out of the map
        Camera cam = GetComponent<Camera>();

        float cameraLeft = player.position.x + offset - cam.orthographicSize * cam.aspect;
        float cameraRight = player.position.x + offset + cam.orthographicSize * cam.aspect;

        float cameraUp = player.position.y + offset + cam.orthographicSize;
        float cameraDown = player.position.y + offset - cam.orthographicSize;

        float newCamPositionX = cam.transform.position.x;
        float newCamPositionY = cam.transform.position.y;

        // if the cam wouldn't go out of bounds then move it
        if (!(cameraLeft < bottomLimitX || cameraRight > upperLimitX)) {
            newCamPositionX = player.position.x + offset;
        }

        if (!(cameraUp > upperLimitY || cameraDown < bottomLimitY)) {
            newCamPositionY = player.position.y + offset;
        }

        transform.position = new Vector3(newCamPositionX, newCamPositionY, -10);
    }
}
