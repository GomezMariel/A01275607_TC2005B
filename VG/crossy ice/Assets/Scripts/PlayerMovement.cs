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
    AudioSource jumpsound;

    public LayerMask blockingLayer;

    // Start is called before the first frame update
    void Start()
    {
        jumpsound = GetComponent<AudioSource>();
    }

    // Update is called once per frame
    void Update()
    {
        Vector3 movement = new Vector3(0,0,0);

        if (Input.GetKeyDown(KeyCode.RightArrow) && transform.position.x < upperLimitX) {
            movement = new Vector3(1, 0, 0);
            jumpsound.Play();
        } 

        else if (Input.GetKeyDown(KeyCode.LeftArrow) && transform.position.x > bottomLimitX) {
            movement = new Vector3(-1, 0, 0);
            jumpsound.Play();
        } 
        
        else if (Input.GetKeyDown(KeyCode.UpArrow) && transform.position.y < upperLimitY) {
            movement = new Vector3(0, 1, 0);
            jumpsound.Play();
        } 
        
        else if (Input.GetKeyDown(KeyCode.DownArrow) && transform.position.y > bottomLimitY) {
            movement = new Vector3(0, -1, 0);
            jumpsound.Play();
        }

        if (canMove(movement)) {
            transform.Translate(movement);
        }
    }

    private bool canMove(Vector3 movement) {

        RaycastHit2D hit = Physics2D.Raycast(transform.position + new Vector3(0.5f, 0.5f, 0f), movement, 1f, blockingLayer);
        return hit.collider == null;
    }
}
