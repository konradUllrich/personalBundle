import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ABW_T_ANTRAG_ABWESENHEITAttributes {
    LUSERIDINSERT?: number;
    REF_ABWESENHEITSART?: string;
    STRID: string;
    LUSERID?: number;
    DTEDIT?: Date;
    TXT_BEMERKUNG?: string;
    DT_VON?: Date;
    DT_BIS?: Date;
    DTINSERT?: Date;
    FLT_ANZAHLTAGE?: number;
    FKSTRID?: string;
}

@Table({
	tableName: "ABW_T_ANTRAG_ABWESENHEIT",
	timestamps: false 
})
export class ABW_T_ANTRAG_ABWESENHEIT extends Model<ABW_T_ANTRAG_ABWESENHEITAttributes, ABW_T_ANTRAG_ABWESENHEITAttributes> implements ABW_T_ANTRAG_ABWESENHEITAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_ABWESENHEITSART?: string;

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
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_BEMERKUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_VON?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_BIS?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_ANZAHLTAGE?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

}