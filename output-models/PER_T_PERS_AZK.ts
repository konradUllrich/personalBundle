import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PER_T_PERS_AZKAttributes {
    DT_UWARBEITSZEITSO?: Date;
    STR_ARBEITSZEITSO?: string;
    L_UWARBEITSZEITMIINSEKUNDEN?: number;
    DT_UWARBEITSZEITSA?: Date;
    L_UWARBEITSZEITFRINSEKUNDEN?: number;
    DT_ARBEITSZEITDO?: Date;
    DT_UWARBEITSZEITDO?: Date;
    L_UWARBEITSZEITSOINSEKUNDEN?: number;
    STR_UWARBEITSZEITSUMME?: string;
    STR_UWARBEITSZEITSO?: string;
    L_UWARBEITSZEITDIINMINUTEN?: number;
    L_ARBEITSZEITFRINMINUTEN?: number;
    DT_ARBEITSZEITSO?: Date;
    L_UWARBEITSZEITSOINMINUTEN?: number;
    DT_ARBEITSZEITSUMME?: Date;
    L_ARBEITSZEITMOINSEKUNDEN?: number;
    DT_ARBEITSZEITMI?: Date;
    TXT_BEMERKUNGEN?: string;
    L_UWARBEITSZEITMIINMINUTEN?: number;
    DT_ARBEITSZEITFR?: Date;
    DT_UWARBEITSZEITSUMME?: Date;
    L_UWARBEITSZEITMOINMINUTEN?: number;
    DT_BIS?: Date;
    DT_VON?: Date;
    L_ARBEITSZEITDOINSEKUNDEN?: number;
    L_ARBEITSZEITFRINSEKUNDEN?: number;
    L_ARBEITSZEITSAINSEKUNDEN?: number;
    STR_ARBEITSZEITDO?: string;
    DT_UWARBEITSZEITFR?: Date;
    DT_UWARBEITSZEITDI?: Date;
    L_ARBEITSZEITDIINMINUTEN?: number;
    STR_ARBEITSZEITMI?: string;
    STR_UWARBEITSZEITFR?: string;
    STR_UWARBEITSZEITMO?: string;
    DTINSERT?: Date;
    STR_UWARBEITSZEITDI?: string;
    L_ARBEITSZEITSAINMINUTEN?: number;
    L_ARBEITZEITSUMMEINMINUTEN?: number;
    L_UWARBEITSZEITSUMMEINMINUTEN?: number;
    STR_ARBEITSZEITSA?: string;
    STR_UWARBEITSZEITDO?: string;
    DT_UWARBEITSZEITMO?: Date;
    L_UWARBEITSZEITFRINMINUTEN?: number;
    STR_ARBEITSZEITMO?: string;
    DT_UWARBEITSZEITMI?: Date;
    FKSTRID?: string;
    L_UWARBEITSZEITSAINSEKUNDEN?: number;
    STR_ARBEITSZEITFR?: string;
    L_ARBEITSZEITSOINMINUTEN?: number;
    L_ARBEITSZEITMIINMINUTEN?: number;
    DT_ARBEITSZEITMO?: Date;
    STR_ARBEITSZEITSUMME?: string;
    DTEDIT?: Date;
    L_UWARBEITSZEITDOINMINUTEN?: number;
    STR_UWARBEITSZEITSA?: string;
    L_ARBEITSZEITSUMMEINSEKUNDEN?: number;
    B_WOCHENIDENTISCH?: boolean;
    L_UWARBEITSZEITDIINSEKUNDEN?: number;
    STRID: string;
    L_ARBEITSZEITDIINSEKUNDEN?: number;
    L_UWARBEITSZEITSAINMINUTEN?: number;
    STR_UWARBEITSZEITMI?: string;
    L_ARBEITSZEITDOINMINUTEN?: number;
    L_UWARBEITSZEITSUMMEINSEKUNDEN?: number;
    LUSERIDINSERT?: number;
    L_UWARBEITSZEITDOINSEKUNDEN?: number;
    STR_ARBEITSZEITDI?: string;
    DT_ARBEITSZEITDI?: Date;
    DT_ARBEITSZEITSA?: Date;
    LUSERID?: number;
    L_UWARBEITSZEITMOINSEKUNDEN?: number;
    L_ARBEITSZEITMOINMINUTEN?: number;
    L_ARBEITSZEITMIINSEKUNDEN?: number;
    L_ARBEITSZEITSOINSEKUNDEN?: number;
    B_INITIALEREINTRAG?: boolean;
}

@Table({
	tableName: "PER_T_PERS_AZK",
	timestamps: false 
})
export class PER_T_PERS_AZK extends Model<PER_T_PERS_AZKAttributes, PER_T_PERS_AZKAttributes> implements PER_T_PERS_AZKAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_UWARBEITSZEITSO?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ARBEITSZEITSO?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_UWARBEITSZEITMIINSEKUNDEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_UWARBEITSZEITSA?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_UWARBEITSZEITFRINSEKUNDEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_ARBEITSZEITDO?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_UWARBEITSZEITDO?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_UWARBEITSZEITSOINSEKUNDEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_UWARBEITSZEITSUMME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_UWARBEITSZEITSO?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_UWARBEITSZEITDIINMINUTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ARBEITSZEITFRINMINUTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_ARBEITSZEITSO?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_UWARBEITSZEITSOINMINUTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_ARBEITSZEITSUMME?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ARBEITSZEITMOINSEKUNDEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_ARBEITSZEITMI?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_BEMERKUNGEN?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_UWARBEITSZEITMIINMINUTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_ARBEITSZEITFR?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_UWARBEITSZEITSUMME?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_UWARBEITSZEITMOINMINUTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_BIS?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_VON?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ARBEITSZEITDOINSEKUNDEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ARBEITSZEITFRINSEKUNDEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ARBEITSZEITSAINSEKUNDEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ARBEITSZEITDO?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_UWARBEITSZEITFR?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_UWARBEITSZEITDI?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ARBEITSZEITDIINMINUTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ARBEITSZEITMI?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_UWARBEITSZEITFR?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_UWARBEITSZEITMO?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_UWARBEITSZEITDI?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ARBEITSZEITSAINMINUTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ARBEITZEITSUMMEINMINUTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_UWARBEITSZEITSUMMEINMINUTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ARBEITSZEITSA?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_UWARBEITSZEITDO?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_UWARBEITSZEITMO?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_UWARBEITSZEITFRINMINUTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ARBEITSZEITMO?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_UWARBEITSZEITMI?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_UWARBEITSZEITSAINSEKUNDEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ARBEITSZEITFR?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ARBEITSZEITSOINMINUTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ARBEITSZEITMIINMINUTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_ARBEITSZEITMO?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ARBEITSZEITSUMME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_UWARBEITSZEITDOINMINUTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_UWARBEITSZEITSA?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ARBEITSZEITSUMMEINSEKUNDEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_WOCHENIDENTISCH?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_UWARBEITSZEITDIINSEKUNDEN?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ARBEITSZEITDIINSEKUNDEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_UWARBEITSZEITSAINMINUTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_UWARBEITSZEITMI?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ARBEITSZEITDOINMINUTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_UWARBEITSZEITSUMMEINSEKUNDEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_UWARBEITSZEITDOINSEKUNDEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ARBEITSZEITDI?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_ARBEITSZEITDI?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_ARBEITSZEITSA?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_UWARBEITSZEITMOINSEKUNDEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ARBEITSZEITMOINMINUTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ARBEITSZEITMIINSEKUNDEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ARBEITSZEITSOINSEKUNDEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_INITIALEREINTRAG?: boolean;

}