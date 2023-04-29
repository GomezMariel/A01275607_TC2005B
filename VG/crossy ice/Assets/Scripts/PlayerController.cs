/*
    script that controlls aspects of the player such as:
     - collisions with enemies
     - winning
     - keep track of score
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class PlayerController : MonoBehaviour
{
    [SerializeField] TMP_Text scoreText;

    float startY;
    float score = 0;
    // Start is called before the first frame update
    void Start()
    {
        startY = transform.position.y;
        scoreText.text = "Score 0";
    }

    // Update is called once per frame
    void Update()
    {
        score = Mathf.Max(score, transform.position.y - startY);
        scoreText.text = "Score " + score;
    }


    private void OnCollisionEnter2D(Collision2D collision) {
        
        if (collision.gameObject.CompareTag("snowball")){
            GameMan.Instance.ShowGameOverScreen();
            Time.timeScale = 0f;
        }
    }
}
