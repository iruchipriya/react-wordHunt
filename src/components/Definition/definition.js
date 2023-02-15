import React from 'react'
import './definition.css';

const definition = ({meaning, word, category, lightMode}) => {
    return (
        <div className="meaning">
          {/* audio---------------------------- */}
          {meaning[0] && word && category === "en" && (
            <audio
              style={{ backgroundColor: "#fff", borderRadius: 10 }}
              src={meaning[0].phonetics[0] && meaning[0].phonetics[0].audio}
              controls
            >
              Your browser does not support the audio element.
            </audio>
          )}
          {/* audio---------------------------- */}
    

          {(word === ""  || meaning.length === 0)? (
            <span className="subTitle">Start by typing a word in search</span>
          ) : (
              meaning.map((mean) =>
              mean.meanings.map((item) =>
                item.definitions.map((def) => (
                  <div
                    className="singleMean"
                    style={{
                      backgroundColor: lightMode ? "#3b5360" : "white",
                      color: lightMode ? "white" : "black",
                    }}
                  >
                    <b>{def.definition}</b>
                    <hr style={{ backgroundColor: "black", width: "100%" }} />
                    {def.example && (
                      <span>
                        <b>Example :</b> {def.example}
                      </span>
                    )}
                    {def.synonyms && (
                      <span>
                        <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                      </span>
                    )}
                  </div>
                ))
              )
            )
          )}
        </div>
      );
    };

export default definition