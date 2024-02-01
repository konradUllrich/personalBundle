import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PER_T_PERS_PROFILAttributes {
    LUSERID?: number;
    FKSTRID?: string;
    DTEDIT?: Date;
    STRID: string;
    L_FILEINFORMATION?: number;
    LUSERIDINSERT?: number;
    TXT_AUFGABENBESCHREIBUNG?: string;
    DTINSERT?: Date;
    TXT_ZUSATZFUNKTIONEN?: string;
}

@Table({
	tableName: "PER_T_PERS_PROFIL",
	timestamps: false 
})
export class PER_T_PERS_PROFIL extends Model<PER_T_PERS_PROFILAttributes, PER_T_PERS_PROFILAttributes> implements PER_T_PERS_PROFILAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_AUFGABENBESCHREIBUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_ZUSATZFUNKTIONEN?: string;

}