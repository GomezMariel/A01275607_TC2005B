/*
    Script to controll the player's collision with the finish line, making the player win
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FinishlineController : MonoBehaviour
{
    void OnTriggerEnter2D(Collider2D col)
    {
        if (col.gameObject.name.Equals("Player")) {
            GameMan.Instance.ShowGameWinScreen();
            Time.timeScale = 0f;
        }
    }
}
