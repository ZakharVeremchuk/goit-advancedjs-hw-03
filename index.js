import{S as c,i as l}from"./assets/vendor-Bg-92U7s.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d=new c(".gallery .image-link",{captionsData:"alt",captionDelay:250}),p="38994291-8fc9a2a1ed4020d28b7742733";function u(s){const o=`https://pixabay.com/api/?${new URLSearchParams({key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(o,{method:"GET"}).then(e=>e.json())}function m(s){return`
    <li class="card">
      <a href="${s.largeImageURL}" class="image-link" target="_blank" rel="noopener">
        <img 
          src="${s.webformatURL}" 
          alt="${s.tags}"
          class="image"/>
      </a>
      <div class="info">
        <div class="likes">
          <p class="title">Likes</p>
          <p class="value">${s.likes}</p>
        </div>
        <div class="views">
          <p class="title">Views</p>
          <p class="value">${s.views}</p>
        </div>
        <div class="comments">
          <p class="title">Comments</p>
          <p class="value">${s.comments}</p>
        </div>
        <div class="downloads">
          <p class="title">Downloads</p>
          <p class="value">${s.downloads}</p>
        </div>
      </div>
    </li>
  `}function f(s,t){s.innerHTML=t.map(m).join("")}document.querySelector(".searchfield");const y=document.querySelector(".inputform"),n=document.getElementById("custom-loader");y.addEventListener("submit",s=>{s.preventDefault();const t=document.getElementById("loading-message"),o=s.target.elements.searchfield.value.trim(),a=document.querySelector(".gallery");if(n.style.display="block",!o){n.style.display="none",l.warning({message:"Please enter a search query!",position:"topRight"}),t.style.display="none";return}t.style.display="block",a.innerHTML="",u(o).then(e=>{n.style.display="none",t.style.display="none",e.hits.length==0?(s.target.elements.searchfield.value="",l.error({message:"Sorry, there are no images mathcing your search query. Please try again!",position:"topRight"})):(f(a,e.hits),d.refresh())}).catch(()=>{n.style.display="none",t.style.display="none"})});
//# sourceMappingURL=index.js.map
