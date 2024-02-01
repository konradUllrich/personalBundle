import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface CAL_T_TERMINE_NACHRICHTENAttributes {
    LUSERIDINSERT?: number;
    STR_BETREFF?: string;
    REF_EMPFAENGER?: number;
    STRID: string;
    DTINSERT?: Date;
    TXT_NACHRICHT?: string;
    B_GELESEN?: boolean;
    FKSTRID?: string;
    LUSERID?: number;
    B_NEU?: boolean;
    REF_ABSENDER?: number;
    DTEDIT?: Date;
}

@Table({
	tableName: "CAL_T_TERMINE_NACHRICHTEN",
	timestamps: false 
})
export class CAL_T_TERMINE_NACHRICHTEN extends Model<CAL_T_TERMINE_NACHRICHTENAttributes, CAL_T_TERMINE_NACHRICHTENAttributes> implements CAL_T_TERMINE_NACHRICHTENAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BETREFF?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_EMPFAENGER?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_NACHRICHT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_GELESEN?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_NEU?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_ABSENDER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

}