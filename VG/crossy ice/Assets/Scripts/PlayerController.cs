/*
    script that controlls aspects of the player such as:
     - collisions with enemies
     - winning
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {

    }

    void OnCollisionEnter2D(Collision2D col)
    {
        print("Collision");
        if (col.gameObject.tag.Equals("snowball")) {
            print("You lost");
        }
    }
}
