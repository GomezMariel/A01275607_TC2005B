/*
    Script to controll the player's collision with water, making the player lose
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WaterController : MonoBehaviour
{



    void OnTriggerEnter2D(Collider2D col)
    {
        if (col.gameObject.name.Equals("Player")) {
            GameMan.Instance.ShowGameOverScreen();
            print("Water: You lose");
            Time.timeScale = 0f;
        }
    }



    // private void OnCollisionEnter2D(Collision2D collision) {
        
    //     if (collision.gameObject.CompareTag("Player")){
    //         GameMan.Instance.ShowGameOverScreen();
    //         print("Water: You lose");
    //         Time.timeScale = 0f;
    //     }
    // }
}
