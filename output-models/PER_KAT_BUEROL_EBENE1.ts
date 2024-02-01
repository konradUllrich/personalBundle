import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PER_KAT_BUEROL_EBENE1Attributes {
    LUSERIDINSERT?: number;
    ID?: string;
    REF_EBENE1?: string;
    FKSTRID?: string;
    LUSERID?: number;
    DTINSERT?: Date;
    LID: number;
    DTEDIT?: Date;
}

@Table({
	tableName: "PER_KAT_BUEROL_EBENE1",
	timestamps: false 
})
export class PER_KAT_BUEROL_EBENE1 extends Model<PER_KAT_BUEROL_EBENE1Attributes, PER_KAT_BUEROL_EBENE1Attributes> implements PER_KAT_BUEROL_EBENE1Attributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_EBENE1?: string;

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
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

}