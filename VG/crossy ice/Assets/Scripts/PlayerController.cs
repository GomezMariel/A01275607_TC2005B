/*
    script that controlls aspects of the player such as:
     - collisions with enemies
     - winning
     - keep track of score
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    float startY;
    float score = 0;
    // Start is called before the first frame update
    void Start()
    {
        startY = transform.position.y;
    }

    // Update is called once per frame
    void Update()
    {
        score = Mathf.Max(score, transform.position.y - startY);
        // print(score);
    }

    // void OnCollisionEnter2D(Collision2D col)
    // {
    //     if (col.gameObject.tag.Equals("snowball")) {
    //         // GameMan.Instance.ShowGameOverText();
    //         // Time.timeScale = 0f;
    //         print("You lost");
    //     }
    // }

    private void OnCollisionEnter2D(Collision2D collision) {
        
        if (collision.gameObject.CompareTag("snowball")){
            GameMan.Instance.ShowGameOverScreen();
            print("Perdiste con bola");
            Time.timeScale = 0f;
        }
    }
}
