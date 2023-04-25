
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class Score : MonoBehaviour
{
    [SerializeField] TMP_Text scoreText;
    [SerializeField] GameObject particles;
    int points;

    // Start is called before the first frame update
    void Start()
    {
        points = 0;
    }

    void OnTriggerEnter2D(Collider2D col)
    {
        points += 1;
        scoreText.text = "Score: " + points;
        Instantiate(particles, transform.position, Quaternion.identity);
    }
}
