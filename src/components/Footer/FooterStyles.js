import styled from "styled-components"

export const FooterWrapper = styled.section`
	width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;


  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`

export const LinkItem = styled.a`
	font-size: 18px;
	line-height: 30px;
	color: ${(props) => props.theme.colors.textMuted};
	margin-bottom: 16px;
	transition: .3s ease;
	position: relative;
	left: 0;

	&:hover {
		color: ${(props) => props.theme.colors.bodyText};
		left: 6px;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 16px;
		line-height: 28px;
		display: flex;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 8px;
		line-height: 14px;
		margin-bottom: 8px;
		display: flex;
		align-items: center;
	}
`

export const SocialIconsContainer = styled.div`
max-width: 1040px;
display: flex;
justify-content: space-between;

@media ${props => props.theme.breakpoints.md}{
  display: flex;
  justify-content: space-between;
}

@media ${props => props.theme.breakpoints.sm}{
  display: flex;
	width: 100%;
  flex-direction: column;
}
`

export const CompanyContainer = styled.div`
  display: flex;
	align-items:baseline;
	flex-wrap: wrap;
	margin-right: auto;
	

	@media ${props => props.theme.breakpoints.md}{
		flex-direction: column;
		align-items: baseline;
	}

	@media ${props => props.theme.breakpoints.sm}{
		display: flex;
		flex-direction: column;
		margin: 0 0 32px;
		align-items: center;
	}
`


export const Slogan = styled.p`
	color: ${(props) => props.theme.colors.textSubtle};
	min-width: 280px;
	letter-spacing: 0.02em;
	font-size: 18px;
	line-height: 30px;
	padding: 1rem;

	@media ${props => props.theme.breakpoints.md}{
		font-size: 16px;
		line-height: 28px;
	}

	@media ${props => props.theme.breakpoints.sm}{
		line-height: 22px;
		font-size: 14px;
		min-width: 100px;
	}
`

export const SocialContainer = styled.div`
	display: flex;
  align-items: center;

	@media ${props => props.theme.breakpoints.md}{
		justify-content: center;
		padding-right: 16px;
		flex-wrap: wrap;
	}
`


export const LinkList = styled.ul`
	border-top: 1px solid ${(props) => props.theme.colors.divider};
  display: grid;
	grid-template-columns: repeat(3, minmax(85px, 220px));
	gap: 40px;
  padding: 40px 0 28px;

	@media ${props => props.theme.breakpoints.lg} {
		padding: 32px 0 16px;
	}

	@media ${props => props.theme.breakpoints.md} {
		width: 100%;
		padding: 32px 0 16px;
		gap: 16px;
	}
	@media ${props => props.theme.breakpoints.sm} {
		width: 100%;
		padding: 32px 4px 16px;
		gap: 5px;
	}
`

export const LinkColumn = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
`
export const SliStrip = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 8px 12px;
	padding: 16px 0 4px;
	margin-top: 20px;
	border-top: 1px solid ${(props) => props.theme.colors.divider};
	font-size: 13px;
	color: ${(props) => props.theme.colors.textMuted};

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 11px;
		gap: 6px 8px;
	}
`;

export const SliPill = styled.span`
	display: inline-flex;
	align-items: center;
	gap: 6px;
	padding: 4px 10px;
	border-radius: 999px;
	background: ${(props) => props.theme.colors.iconHoverBg};
	font-variant-numeric: tabular-nums;
	white-space: nowrap;
`;

export const StatusDot = styled.span`
	display: inline-block;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: ${(props) =>
		props.status === 'up'
			? '#22c55e'
			: props.status === 'degraded' || props.status === 'maintenance'
				? '#f59e0b'
				: props.status === 'down'
					? '#ef4444'
					: 'rgba(180, 180, 180, 0.5)'};

	${(props) =>
		props.status === 'up' &&
		`animation: sliPulse 2.4s ease-in-out infinite;
		@keyframes sliPulse {
			0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.55); }
			50% { box-shadow: 0 0 0 5px rgba(34, 197, 94, 0); }
		}`}
`;

export const SliDeploy = styled.div`
	font-size: 12px;
	color: ${(props) => props.theme.colors.textMuted};
	opacity: 0.9;
	display: inline-flex;
	align-items: center;
	gap: 6px;
	flex-wrap: wrap;

	code {
		font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
		background: ${(props) => props.theme.colors.iconHoverBg};
		padding: 1px 6px;
		border-radius: 4px;
		font-size: 11px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 10px;
		code { font-size: 9px; }
	}
`;

export const LinkTitle = styled.h4`
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 24px;
	text-transform: uppercase;
	color: ${(props) => props.theme.colors.textSubtle};
	margin-bottom: 16px;

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 10px;
		line-height: 12px;
		margin-bottom: 8px;
	}
`
