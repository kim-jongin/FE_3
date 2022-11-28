import React from 'react'

import Author from '../author/Author'
import Category from '../category/Category'

export default function Posts() {
  return (
    <li>
    <a href="post-view.html" class="post">
      <article>
        <img src="./images/post-img6.jpg" alt="" />
        <div class="contents-wrap">
          <Category />

          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>
          <Author />

          <p class="post-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
            facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta
            corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis
            dolor quas odio cum incidunt repudiandae vel."
          </p>
        </div>
      </article>
    </a>
  </li>
  )
}
