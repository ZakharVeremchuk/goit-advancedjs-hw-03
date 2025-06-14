import{S as n,i as l}from"./assets/vendor-Bg-92U7s.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const c=new n(".gallery .image-link",{captionsData:"alt",captionDelay:250}),d="38994291-8fc9a2a1ed4020d28b7742733";function p(t){const a=`https://pixabay.com/api/?${new URLSearchParams({key:d,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(a,{method:"GET"}).then(e=>e.json())}function u(t){return`
    <li class="card">
      <a href="${t.largeImageURL}" class="image-link" target="_blank" rel="noopener">
        <img 
          src="${t.webformatURL}" 
          alt="${t.tags}"
          class="image"/>
      </a>
      <div class="info">
        <div class="likes">
          <p class="title">Likes</p>
          <p class="value">${t.likes}</p>
        </div>
        <div class="views">
          <p class="title">Views</p>
          <p class="value">${t.views}</p>
        </div>
        <div class="comments">
          <p class="title">Comments</p>
          <p class="value">${t.comments}</p>
        </div>
        <div class="downloads">
          <p class="title">Downloads</p>
          <p class="value">${t.downloads}</p>
        </div>
      </div>
    </li>
  `}function m(t,r){t.innerHTML=r.map(u).join("")}const f=document.querySelector(".searchfield"),g=document.querySelector(".inputform");g.addEventListener("submit",t=>{t.preventDefault();const r=document.getElementById("loading-message");r.style.display="block";const a=f.value.trim();p(a).then(o=>{if(r.style.display="none",o.hits.length==0)l.error({message:"Sorry, there are no images mathcing your search query. Please try again!",position:"topRight"});else{const e=document.querySelector(".gallery");m(e,o.hits),c.refresh()}}).catch(()=>{r.style.display="none"})});
//# sourceMappingURL=index.js.map
