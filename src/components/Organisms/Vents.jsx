import React from "react";

const Vents = () => {
  return (
    <>
      <article class="card">
        <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          <img src="https://edteam-media.s3.amazonaws.com/courses/big/3ec614b5-a9b7-475c-bf8f-8ba643a129eb.png" alt="go" />
        </div>
        <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
          <h3 class="t5 s-mb-2 s-center">
            Programación orientada a objetos con Go
          </h3>
          <div class="s-mb-2 s-main-center">
            <div class="card__teacher s-cross-center">
              <div class="card__avatar s-mr-1">
                <div class="circle img-container">
                  <img src="https://images.unsplash.com/flagged/photo-1559475555-b26777ed3ab4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" alt="" />
                </div>
              </div>
              <span class="small">Alexys Lozada</span>
            </div>
          </div>
          <div class="s-main-center">
            <a class="button--ghost-alert button--tiny" href="#">
              $ 20USD
            </a>
          </div>
        </div>
      </article>
    </>
  );
};



export default Vents;
