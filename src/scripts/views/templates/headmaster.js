import CONFIG from '../../globals/config';

export const headmasterHome = `
    <div class="headmaster">
        <div class="headmaster-content">
          <div>
            <h1 class="text-center headmaster-title">
              With yummie recipe from Indonesia
            </h1>
            <p class="text-center headmaster-desc">
              Traditional recipes in concoction and produced with modern
              equipment so that they are more hygienic, in Olah without MSG and
              preservatives, making it taste different than others.
            </p>
            <button class="btn button-center">Learn more</button>
          </div>
        </div>
      </div>
`;

export const headmasterDetail = (param) => {
  const { name, description, pictureId } = param;
  return `
    <div class="headmaster headmaster-detail" style=" background-image: url('${
  CONFIG.PICTURE_URL + pictureId
}') !important; ">
      <div class="headmaster-content">
        <div>
          <h1 class="text-center headmaster-title">
            ${name}
          </h1>
          <p class="text-center headmaster-desc">
            ${description}
          </p>
        </div>
      </div>
    </div>
  `;
};
