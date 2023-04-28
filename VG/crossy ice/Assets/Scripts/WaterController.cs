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
            print("Water: You lose");
        }
    }
}
