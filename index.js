import{S as c,i as l}from"./assets/vendor-Bg-92U7s.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d=new c(".gallery .image-link",{captionsData:"alt",captionDelay:250}),p="38994291-8fc9a2a1ed4020d28b7742733";function u(t){const o=`https://pixabay.com/api/?${new URLSearchParams({key:p,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(o,{method:"GET"}).then(e=>e.json())}function m(t){return`
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
  `}function f(t,s){t.innerHTML=s.map(m).join("")}document.querySelector(".searchfield");const y=document.querySelector(".inputform"),i=document.getElementById("custom-loader");y.addEventListener("submit",t=>{t.preventDefault();const s=document.getElementById("loading-message"),o=t.target.elements.searchfield.value.trim(),a=document.querySelector(".gallery");if(i.style.display="block",!o){l.warning({message:"Please enter a search query!",position:"topRight"}),s.style.display="none";return}s.style.display="block",a.innerHTML="",u(o).then(e=>{i.style.display="none",s.style.display="none",e.hits.length==0?(t.target.elements.searchfield.value="",l.error({message:"Sorry, there are no images mathcing your search query. Please try again!",position:"topRight"})):(f(a,e.hits),d.refresh())}).catch(()=>{i.style.display="none",s.style.display="none"})});
//# sourceMappingURL=index.js.map
