import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PER_T_PERS_UKAttributes {
    FLT_ZUSATZURLAUBGEMSGBIX?: number;
    DTEDIT?: Date;
    FKSTRID?: string;
    FLT_URLAUBIST?: number;
    FLT_RESTURLAUBAUSVORJAHR?: number;
    FLT_VERFUEGBARERURLAUB?: number;
    FLT_URLAUBSANSPRUCH?: number;
    L_JAHR?: number;
    DTINSERT?: Date;
    STRID: string;
    LUSERID?: number;
    LUSERIDINSERT?: number;
    FLT_KORREKTUR?: number;
    FLT_URLAUBSANSPRUCHPLAN?: number;
    TXT_BEMERKUNGEN?: string;
}

@Table({
	tableName: "PER_T_PERS_UK",
	timestamps: false 
})
export class PER_T_PERS_UK extends Model<PER_T_PERS_UKAttributes, PER_T_PERS_UKAttributes> implements PER_T_PERS_UKAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_ZUSATZURLAUBGEMSGBIX?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_URLAUBIST?: number;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_RESTURLAUBAUSVORJAHR?: number;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_VERFUEGBARERURLAUB?: number;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_URLAUBSANSPRUCH?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_JAHR?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_KORREKTUR?: number;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_URLAUBSANSPRUCHPLAN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_BEMERKUNGEN?: string;

}