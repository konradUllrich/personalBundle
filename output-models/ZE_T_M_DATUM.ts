import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ZE_T_M_DATUMAttributes {
    DTEDIT?: Date;
    L_ARBEITSZEITSOLLSEKUNDEN?: number;
    STR_ZUSATZDATEN?: string;
    REF_BUCHUNGSART?: string;
    FKSTRID?: string;
    STRID: string;
    L_ARBEITSZEITSOLLMINUTEN?: number;
    DT_VON?: Date;
    STR_UNTERBRECHUNG?: string;
    STR_WOCHENTAG?: string;
    DT_DATUM?: Date;
    DT_PAUSE?: Date;
    LUSERID?: number;
    L_ARBEITSZEITISTSEKUNDEN?: number;
    STR_ARBEITSZEITSALDO?: string;
    DTINSERT?: Date;
    L_ARBEITSZEITISTMINUTEN?: number;
    STR_GUIDABWESENHEITSANTRAG?: string;
    TXT_BEMERKUNGEN?: string;
    DT_ARBEITSZEITIST?: Date;
    STR_ARBEITSZEITIST?: string;
    L_ARBEITSZEITSALDOSEKUNDEN?: number;
    REF_ZEITTYP?: string;
    DT_ARBEITSZEITSALDO?: Date;
    DT_BIS?: Date;
    L_ARBEITSZEITSALDOMINUTEN?: number;
    STR_HINWEIS?: string;
    L_KW?: number;
    STR_PAUSE?: string;
    LUSERIDINSERT?: number;
    STR_ARBEITSZEITSOLL?: string;
    TXT_BUCHUNGSARTEN?: string;
}

@Table({
	tableName: "ZE_T_M_DATUM",
	timestamps: false 
})
export class ZE_T_M_DATUM extends Model<ZE_T_M_DATUMAttributes, ZE_T_M_DATUMAttributes> implements ZE_T_M_DATUMAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ARBEITSZEITSOLLSEKUNDEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ZUSATZDATEN?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_BUCHUNGSART?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ARBEITSZEITSOLLMINUTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_VON?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_UNTERBRECHUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_WOCHENTAG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_DATUM?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_PAUSE?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ARBEITSZEITISTSEKUNDEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ARBEITSZEITSALDO?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ARBEITSZEITISTMINUTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_GUIDABWESENHEITSANTRAG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_BEMERKUNGEN?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_ARBEITSZEITIST?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ARBEITSZEITIST?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ARBEITSZEITSALDOSEKUNDEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_ZEITTYP?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_ARBEITSZEITSALDO?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_BIS?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ARBEITSZEITSALDOMINUTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_HINWEIS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_KW?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_PAUSE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ARBEITSZEITSOLL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_BUCHUNGSARTEN?: string;

}