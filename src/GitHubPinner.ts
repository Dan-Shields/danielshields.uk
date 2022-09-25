import lang_colors_raw from './assets/GitHubPinner_lang_colors.json'
import dan_shields_repos from './assets/dan-shields_repos.json'

const lang_colors = lang_colors_raw as {
    [key: string]: {
        color: null | string
        url: string
    }
}

const types = {
    PROFILE: 0,
    REPO: 1,
    ALL: 2,
}

// MARK: - Main
function init() {
    const origin = document.getElementsByClassName('github-pinner')
    if (origin[0] == null)
        throw new Error(
            "GitHub Planner: Could not find GitHub Pinner HTML element. Do you have the right 'id' set on the element?"
        )

    for (let i = 0; i < origin.length; i++) {
        loadElements(origin[i] as HTMLElement)
    }
}

function loadElements(parent: HTMLElement, filter = '') {
    const values = parseUrl(parent.getAttribute('data') as string)
    getDataForUrl(
        values['URL'],
        values['TYPE'],
        parent,
        function (obj: any, type: number, element: HTMLElement) {
            // set up DOM elements
            if (type == types['PROFILE']) {
                let temp =
                    '<div id="gp-container-profile"><a href="' +
                    obj.html_url +
                    '">'
                if (obj.bio.length < 45)
                    temp +=
                        '<img id=\'gp-avatar\' style="width: 60px;" src="' +
                        obj.avatar_url +
                        "\"></a><div id='gp-information'><a class='gp-link' href=\"" +
                        obj.html_url +
                        '"><span class="gp-element gp-name">' +
                        obj.name +
                        '</span><span class="gp-element gp-user">' +
                        obj.login +
                        '</span></a><span class="gp-element gp-bio">' +
                        obj.bio +
                        '</span></div><div class=\'gp-stats\'><a class="gp-stat" href="' +
                        obj.html_url +
                        '?tab=repositories' +
                        '"><b class="gp-stat-val">' +
                        obj.public_repos +
                        '</b><span class="gp-stat-desc">Repos</span></a><a class="gp-stat" href="' +
                        obj.html_url +
                        '?tab=followers' +
                        '"><b class="gp-stat-val">' +
                        obj.followers +
                        '</b><span class="gp-stat-desc">Followers</span></a><a class="gp-stat" href="' +
                        obj.html_url +
                        '?tab=following' +
                        '"><b class="gp-stat-val">' +
                        obj.following +
                        '</b><span class="gp-stat-desc">Following</span></a><a href="' +
                        obj.html_url +
                        '" class="gp-btn gp-follow">Follow</a></div></div>'
                else
                    temp +=
                        '<img id=\'gp-avatar\' style="width: 80px;" src="' +
                        obj.avatar_url +
                        "\"></a><div id='gp-information'><a class='gp-link' href=\"" +
                        obj.html_url +
                        '"><span class="gp-element gp-name">' +
                        obj.name +
                        '</span><span class="gp-element gp-user">' +
                        obj.login +
                        '</span></a><span class="gp-element gp-bio">' +
                        obj.bio +
                        '</span></div><div class=\'gp-stats\'><a class="gp-stat" href="' +
                        obj.html_url +
                        '?tab=repositories' +
                        '"><b class="gp-stat-val">' +
                        obj.public_repos +
                        '</b><span class="gp-stat-desc">Repos</span></a><a class="gp-stat" href="' +
                        obj.html_url +
                        '?tab=followers' +
                        '"><b class="gp-stat-val">' +
                        obj.followers +
                        '</b><span class="gp-stat-desc">Followers</span></a><a class="gp-stat" href="' +
                        obj.html_url +
                        '?tab=following' +
                        '"><b class="gp-stat-val">' +
                        obj.following +
                        '</b><span class="gp-stat-desc">Following</span></a><a href="' +
                        obj.html_url +
                        '" class="gp-btn gp-follow">Follow</a></div></div>'
                if (element.classList.contains('flat')) {
                    element.className = 'github-pinner flat gp-profile'
                } else {
                    element.className = 'github-pinner gp-profile'
                }
                element.innerHTML = temp
            } else if (type == types['REPO']) {
                const temp = getRepo(obj)
                if (element.classList.contains('flat')) {
                    element.className = 'github-pinner flat gp-repo'
                } else {
                    element.className = 'github-pinner gp-repo'
                }
                element.innerHTML = temp
            } else if (type == types['ALL']) {
                if (element.classList.contains('flat')) {
                    element.className = 'github-pinner flat gp-all'
                } else {
                    element.className = 'github-pinner gp-all'
                }
                if (filter != '') {
                    const child = element.querySelector(
                        '#gp-container-all-repos'
                    )
                    if (!child) return
                    let temp = ''
                    for (let j = 0; j < obj.length; j++) {
                        if (
                            filter == '' ||
                            obj[j].name
                                .toLowerCase()
                                .indexOf(filter.toLowerCase()) != -1
                        ) {
                            temp += getRepo(obj[j])
                        }
                    }
                    child.innerHTML = temp
                } else {
                    let temp =
                        '<input type="text" placeholder="Search for project..." value="' +
                        filter +
                        '" class="gp-search"></input><div id="gp-container-all-repos">'
                    for (let j = 0; j < obj.length; j++) {
                        temp += getRepo(obj[j])
                    }
                    temp += '</div>'
                    element.innerHTML = temp
                    const searchs = document.getElementsByClassName('gp-search')
                    for (let j = 0; j < searchs.length; j++) {
                        searchs[j].addEventListener('keyup', search)
                    }
                }
            }
            element.style.visibility = 'visible'
        }
    )
}

function search(e: any) {
    loadElements(e.path[1], e.target.value)
}

function getRepo(obj: any) {
    let temp =
        '<div id="gp-container-repo"><a class="gp-title" href="' +
        obj.html_url +
        '">' +
        obj.name +
        '</a><p class="gp-desc">' +
        (obj.description || '') +
        '</p><div id="gp-stats">'
    if (obj.language != '' && lang_colors[obj.language])
        temp +=
            '<p class="gp-stat"><span class="gp-lang" style="background-color: ' +
            lang_colors[obj.language]['color'] +
            ';"></span>' +
            obj.language +
            '</p>'
    if (obj.stargazers_count != 0)
        temp +=
            '<a class="gp-stat gp-link" href="' +
            obj.html_url +
            '/stargazers' +
            '"><svg class="gp-octicon" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>' +
            obj.stargazers_count +
            '</a>'
    if (obj.forks != 0)
        temp +=
            '<a class="gp-stat gp-link" href="' +
            obj.html_url +
            '/network' +
            '"><svg class="gp-octicon" height="16" role="img" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>' +
            obj.forks +
            '</a>'
    temp += '</div></div>'
    return temp
}

function getDataForUrl(
    url: string,
    type: number,
    element: HTMLElement,
    completion: (obj: any, type: number, element: HTMLElement) => void
) {
    const request = new XMLHttpRequest()
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            completion(JSON.parse(request.responseText), type, element)
        } else if (
            request.readyState == 4 &&
            url == 'https://api.github.com/users/dan-shields/repos'
        ) {
            completion(dan_shields_repos, type, element)
        } else if (
            request.readyState == 4 &&
            /^(https:\/\/api.github.com\/repos\/dan-shields\/)[A-Za-z\d-]{1,100}(\/)?$/.test(
                url
            )
        ) {
            const repoName = url.split('/').slice(-1)[0].toLowerCase()

            const repoData = dan_shields_repos.find(
                (repo) => repo.name.toLowerCase() === repoName
            )

            if (repoData) completion(repoData, type, element)
        }
    }

    request.open('GET', url, true)
    request.send(null)
}

// MARK: - Helper Functions
function parseUrl(url: string) {
    const profile =
        /^(http|https):\/\/(www.)?github.com(\/)?\/[A-Za-z\d-]{1,39}(\/)?$/
    const repository =
        /^(http|https):\/\/(www.)?github.com\/[A-Za-z\d-]{1,39}\/[A-Za-z\d-]{1,100}(\/)?$/
    const repositories =
        /^(http|https):\/\/(www.)?github.com\/[A-Za-z\d-]{1,39}\?tab=repositories(\/)?$/
    if (profile.test(url)) {
        // profile
        const profileName = url
            .replace(/^(http|https):\/\/(www.)?github.com(\/)?/g, '')
            .replace(/\/$/, '')
        return {
            URL: 'https://api.github.com/users/' + profileName,
            TYPE: types['PROFILE'],
        }
    } else if (repository.test(url)) {
        // repository
        const profileName = url
            .replace(/^(http|https):\/\/(www.)?github.com(\/)?/g, '')
            .replace(/\/.*(\/)?$/, '')
        const repositoryName = url
            .replace(
                /^(http|https):\/\/(www.)?github.com\/[A-Za-z\d-]{1,39}\//g,
                ''
            )
            .replace(/\/$/, '')
        return {
            URL:
                'https://api.github.com/repos/' +
                profileName +
                '/' +
                repositoryName,
            TYPE: types['REPO'],
        }
    } else if (repositories.test(url)) {
        // repositories
        const profileName = url
            .replace(/^(http|https):\/\/(www.)?github.com\//, '')
            .replace(/\?tab=repositories(\/)?$/, '')
        return {
            URL: 'https://api.github.com/users/' + profileName + '/repos',
            TYPE: types['ALL'],
        }
    } else {
        throw new Error(
            'GitHub Planner: Invalid data parameter! Unrecognized GitHub URl: ' +
                url
        )
    }
}

document.addEventListener('DOMContentLoaded', function (event) {
    init()
})
